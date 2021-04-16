# Creating a new plugin

## Internal architecture

The internal architecture of the OpenFMB adapter consists of an internal publisher/subscriber
message bus and a plugin registry. Each OpenFMB profile has its own "channel" on the bus, and
the generated C++ protobuf objects are the canonical model used within the application to pass
data between plugins. At startup, all plugins are initialized based on configuration files. 
During initialization, plugins may subscribe to the internal message bus to receive profiles
when published by another plugin. Once all plugins are loaded, they are started. From this point, 
plugins may publish profiles to the internal message bus. All plugins that subscribed for this
type of message will get notified of the new message and will be able to forward it to the external
world.

The following diagram shows an example of how the adapter works:

![Adapter acting as a protocol translator](img/protocol-translator.svg)

## Native vs legacy plugins

Native plugins are OpenFMB aware, i.e. they use the OpenFMB model coupled to a messsaging transport
defined by the OpenFMB standard (e.g. NATs/ MQTT / etc). The messages are directly serialized/deserialized 
off the wire as OpenFMB models and don't require a custom mapping. For example, the NATS plugin reads
and writes the OpenFMB messages in their Protobuf representation and sends/receives them to/from a NATS broker.
Similarly, the DDS plugin directly (de)serializes the OpenFMB messages directly from the DDS representation.

Legacy plugins need a custom mapping to translate OpenFMB messages to/from the
underlying protocol. For example, the DNP3 master plugin needs to transform
OpenFMB control messages to DNP3 commands. It also maps measurement readings
from DNP3 points to OpenFMB values, sometimes performing scaling. These
transformations requires the user to write mapping files to transform the values
read from DNP3 points to OpenFMB values and vice versa.

## Creating a plugin

The first step to create a plugin is to add a new CMake target that links to
`adapter-util`. Preferably, the compilation of this new target should be
conditional on some CMake variable. Refer to the `CMakeLists.txt` of the existing
plugins as a template.

The target must expose an implementation of the top level C++ API class `IPluginFactory`:

```cpp
/**
* Top level API class for creating a new plugin
*/
class IPluginFactory {
public:
    virtual ~IPluginFactory() = default;

    // unique name of the plugin
    virtual std::string name() const = 0;

    // description of the plugin
    virtual std::string description() const = 0;

    // JSON schema for top-level configuration file
    virtual schema::Object get_plugin_schema() const = 0;

    // JSON schema for the mapping files, the per-profile schema
    virtual std::vector<schema::property_ptr_t> get_session_schema() const
    {
        throw api::Exception(name(), "does not support writing session configuration");
    }

    // JSON schema for a particular profile
    virtual std::vector<schema::property_ptr_t> get_profile_schema(const std::string& profile) const
    {
        throw api::Exception(name(), "does not support writing session configuration");
    }

    // returns a `api::IPlugin` for the plugin
    virtual std::unique_ptr<IPlugin> create(const YAML::Node& node, const Logger& logger, message_bus_t bus) = 0;
};
```

**Note:**

- `get_plugin_schema`: 
  For native plugins, it generally includes information to connect to the
  broker. For legacy plugins, it generally includes global configuration and an
  array of YAML templates. `util::yaml::get_template_schema` is useful to create
  the JSON schema of such templates.

- `get_session_schema`: returns the JSON schema of the mapping files, without
  the per-profile schema. For legacy plugins, this generally includes
  information to connect to the legacy device and other shared information
  across the profile mappings. This method should not be
  implemented for native plugins.

- `get_profile_schema`: returns the JSON schema for a particular profile. When
  generating JSON schemas, this callback will be called for every profile. For
  legacy plugins, you should use `api::ProfileRegistry::handle_by_name` and a
  `SchemaWriteVisitorBase` to visit the profile and write the schema for each
  field. This method should not be implemented for native plugins.

You should then an implementation of `api::IPlugin` to return when `IPluginFactory::create(..)` is called:

```cpp
class IPlugin {
    public:
        virtual ~IPlugin() = default;

        // supplies the same name as the factory
        virtual std::string name() const = 0;

        // start the execution of the adapter
        virtual void start() = 0;
    };
```


The constructor will take the YAML node of the plugin, a logger and the internal message
bus. It should read the configuration and subscribe to the required messages on
the message bus if necessary. The `start` method is called once all the plugins
are created. This is where the plugin should start listening for incoming
messages to relay/interpret. This method is synchronous, so it should generally
spawn a background thread or use another library callback mechanism to subscribe
for messages and return immediately. The destructor should gracefully stop
listening and wait for any background threads created.

For legacy plugins, the `api::IPlugin` implementation should read mapping
configuration from templated YAML files. The `util::yaml::load_template_configs`
can be used to automatically read the templated YAML files with the values
properly replaced. Then, for each profile, `api::ProfileRegistry::handle_by_name`
can be used with a `SubscribingConfigReadVisitorBase` or a `PublishingConfigReadVisitorBase` to
navigate the profile mappings and build the internal representation of the
mappings.

The final step of adding your plugin to the application is putting it in the 
`PluginRegistry` of the `application` target. Conditional compilation should 
be use to include the plugin only when a particular CMake variable is set.
