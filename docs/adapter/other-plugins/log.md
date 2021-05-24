# Log Plugin

The `log` plugin enables the user to monitor the messages that are sent to the
internal bus by printing them to the console or to a file. It can be useful for
debugging purposes.

## Configuration

- `log_debug_string`: when set to `true`, all messages will be printed using
  Protobuf
  [`DebugString`](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.DebugString)
  method.
- `filters`: a list of profiles to print
  - `profile`: name of the profile to monitor
  - `name`: conducting equipment identifier
  - `path`: path of the file to which values will be appended
  - `print_alias`: if `true`, the alias of the values will be printed to the file
  - `log_all_values`: if `true`, all the value of this conducting equipment will
    be printed to `stdout`.
  - `values`: list of values to extract from the profile
    - `tag`: path of the value in the profile. e.g. "meterReading.readingMMXU.W.net.cVal.mag.f.value"
    - `alias`: alias that will optionally be printed with the value
    - `digits`: number of digits to keep

Here's an example of a configuration:

```yaml
log:
  enabled: true
  log_debug_string: true  # log the entire protobuf debug string for every profile
  filters:
    - profile: MeterReadingProfile
      name: "test"  # conducting equipment name
      path: values.txt  # file to which values will be appended
      print_alias: true
      log_all_values: false
      values:
        - tag: meterReading.readingMMXU.W.net.cVal.mag.f.value
          alias: W
          digits: 0
        - tag: meterReading.readingMMXU.PPV.phsAB.cVal.mag.f.value
          alias: Vab
          digits: 1
        - tag: meterReading.readingMMXU.PPV.phsBC.cVal.mag.f.value
          alias: Vbc
          digits: 1
        - tag: meterReading.readingMMXU.PPV.phsCA.cVal.mag.f.value
          alias: Vca
          digits: 1
        - tag: meterReading.readingMMXU.Hz.mag.f.value
          alias: Hz
          digits: 3
```
