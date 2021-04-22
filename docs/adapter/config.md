---
sidebar_position: 5
---

# Configuration

When the adapter application is started, the top level configuration file is
read first. (see [Running the adapter](./cli#running-the-adapter)).

It consists of two main sections:

- [Logging](#logging) - application-level logging parameters
- [Plugins](#plugins) - detailed plugin-specific configuration

## Logging

The logger name is used for messages not related to a particular plugin. It can
be useful to distinguish multiple instances of the adapter running on a machine.

Console logging can be enabled to print everything to `stdout`.

Rotating file logging can be used to preserve most recent logs without filling
the disk unnecessarily. When the `max-size` is reached, the file is closed,
renamed and a new file is created to continue logging. Only the last `max-files`
are kept.

```yaml
logging:
  logger-name: application
  console:  # log messages to the console
    enabled: true
  rotating-file:  # log messages to rotating files
    enabled: false
    path: adapter.log
    max-size: 1048576  # maximum size of a single file in bytes
    max-files: 3
```

## Plugins

In this section, each plugin can be enabled and configured. For details about
each plugin configuration parameters, see the appropriate documentation page.

The `enabled` boolean parameter is used to enable/disable a particular plugin.

Non-OpenFMB plugins (e.g. DNP3), will have extra configuration files for each
device with which it communicates. When another YAML file is needed, the `path`
parameter points to the file and the `overrides` list defines parameters
overriden by a templating system.

## Templating

It is common to have multiple devices sharing the same protocol configuration
except for a few fields (e.g. the conducting equipment mRID). In order to be
able to reuse the same configuration file, a simple templating engine is
available.

In the configuration file for a device, it is possible to use the special value
`"?"`. In the `overrides` parameter of the main configuration file, a path to
the `"?"` value is specified for each device with the appropriate value to
replace.

Here is an example with a DNP3 configuration. The device configuration contains
the following field:

```yaml
# ...
profiles:
  - name: SolarControlProfile
    # ...
    mapping:  # profile model starts here
      solarInverter:
        conductingEquipment:
          mRID:
            string-field-type: primary_uuid
            value: "?"
```

In the top-level configuration, we have the following:

```yaml
# ...
dnp3-master:
    enabled: true
    thread-pool-size: 1  # defaults to std::thread::hardware_concurrency() if <= 0
    masters:
        - path: dnp3-master.yml
          overrides:
            - key: profiles[0].mapping.solarInverter.conductingEquipment.mRID.value
              value: 42e2c687-c55c-44a0-a734-9443edb46bfc
        - path: dnp3-master.yml
          overrides:
            - key: profiles[0].mapping.solarInverter.conductingEquipment.mRID.value
              value: 8ad421eb-b0ad-457b-8813-41ab5e47bc1e
```

This configures communication to two DNP3 devices using a single template. One with mRID
`42e2c687-c55c-44a0-a734-9443edb46bfc`, the other with mRID
`8ad421eb-b0ad-457b-8813-41ab5e47bc1e`, with the exact same mappings and
configurations.

For configurations with multiple profiles, indexing is used to specify which
profile. For example, if a the `dnp3-master.yml` has a second profile that is
templated, then it can be accessed like this:

```yaml
# ...
dnp3-master:
  enabled: true
  thread-pool-size: 1  # defaults to std::thread::hardware_concurrency() if <= 0
  masters:
    - path: dnp3-master.yml
      overrides:
        # First profile
        - key: profiles[0].mapping.solarInverter.conductingEquipment.mRID.value
          value: 42e2c687-c55c-44a0-a734-9443edb46bfc
        # Second profile
        - key: profiles[1].mapping.solarInverter.conductingEquipment.mRID.value
          value: 8ad421eb-b0ad-457b-8813-41ab5e47bc1e
```
