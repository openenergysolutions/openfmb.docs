# CLI

The command-line interface (CLI) to the adapter provides some helpful commands including:

* show all available commands (help)
* run the adapter
* generate a default top-level config file
* generate a default protocol-specific config file for specified profiles
* list all the provided protocol plugins

## Help

Prints a short description of all the available commands and parameters.

```bash
> openfmb-adapter -h
```

Result:

```bash
Options

    -h, --help
        show this help message
    -l, --list
        list available plugins
    -v, --version
        display version information
    -c, --config
        run with the specified config file
    -g, --generate
        generate the specified config file
    -s, --schema
        generate a JSON schema
    -p, --plugin
        the plugin for which to generate configuration
    -f, --profile
        profile to generate
```


## Generate top-level configuration

A default top-level configuration may be generated using the `-g` flag. This is the file that will be needed when
running the adapter (see [Running the adapter](./#running-the-adapter)).

```bash
> openfmb-adapter -g config.yml
```

## Generate configuration for a plugin

Some plugins, notably the adapter-type protocol plugins, need extra configuration in
separate files. The output file is specified with the `-g` argument, the plugin
for which the config is generated is specified with the `-p` argument and the
desired profile is specified with the `-f` argument.

Note that multiple profiles can be generated for a single configuration file by providing
multiple `-f` parameters:

```bash
> openfmb-adapter -g dnp3-master.yml -p dnp3-master -f SolarReadingProfile -f SolarStatusProfile
```

## Generate configuration JSON schemas

Each YAML configuration file has JSON schemas that can be printed to a file to
help writing valid configurations.

To generate the top-level schema, run the following:

```bash
> openfmb-adapter -s config.json
```

To generate the schema for a particular plugin, run the following:

```bash
> openfmb-adapter -s dnp3-master.json -p dnp3-master
```

The `--pretty-print` argument can also be used to produce human-readable schema
files. Note that these files are particularly large for plugins and
pretty-printing should be used only for debugging purposes.

To learn how to leverage these schemas in your editing environment, see the
[Schemas](./schemas.md) page.

## Running the adapter

The adapter is run using the `-c` flag. To stop the adapter, hit Ctrl-C on the keyboard.

```bash
> openfmb-adapter -c [config.yml]
```

## List plugins

All available plugins compiled in this instance of the adapter can be listed using the `-l` flag.

```bash
> openfmb-adapter -l
```

Result:

```bash
available plugins:

capture           - captures published OpenFMB messages to a replayable file format
dds-rti           - publish/subscribe to DDS using RTI bindings (requires run-time license)
dnp3-master       - maps openFMB to the master side of the DNP3 protocol
dnp3-outstation   - maps openFMB to the outstation side of the DNP3 protocol
goose-pub         - maps GOOSE protocol messages to OpenFMB
goose-sub         - maps OpenFMB messages to the GOOSE protocol
log               - pretty prints profiles to the log
modbus-master     - maps OpenFMB to the Modbus protocol
modbus-outstation - maps the Modbus protocol to OpenFMB
mqtt              - publish/subscribe to a MQTT broker
nats              - publish/subscribe to a NATS server
replay            - replays captured OpenFMB messages from a file
timescaledb       - saves all the published messages to a TimescaleDB
```

## Version

The `git` commit date and hash of the code compiled in this instance of the adapter can be listed
using the `-v` flag. The hash can be used on GitHub to retrieve the exact code used, simply go to
`https://github.com/openenergysolutions/openfmb.adapters/commit/{HASH}`.

```bash
openfmb-adapter -v
```

Result:

```bash
git commmit date: 2019-10-10
git commmit hash: d97428d36b3c311004deac38936573fc67237f0e
```

