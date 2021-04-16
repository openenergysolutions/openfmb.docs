# DDS

[DDS](https://www.dds-foundation.org/) is a standard protocol providing
low-latency data connectivity with optional extreme reliability for
mission-critical IoT applications. It is mainly used domains like aerospace,
defense, ATC, robotics and smart grid management.

There are two implementations for DDS in the adapter and they both use
commercial software that requires a license.

## RTI DDS

The `dds-rti` implementation uses [RTI Connext DDS](https://www.rti.com/) 6.0.0.
In order to run this configuration, you need a proper license installed (a
`rti_license.dat` file). The Docker images provide a working license.

### Configuration

```yaml
dds-rti:
  enabled: true
  domain-id: 0
  publish:  # to the DDS broker
    - profile: SwitchReadingProfile
      subject: "*"  # * or an mRID
    - profile: SwitchStatusProfile
      subject: "87c73d56-b9ab-4a5c-8cd6-cf603490e3e4"  # * or an mRID
  subscribe:  # from the DDS broker
    - profile: SwitchControlProfile
      subject: "*"  # * or an mRID
```

- `domain-id`: DDS domain identifier
- `publish`: a list of profiles to publish to the DDS broker
- `subscribe`: a list of profiles to read from the DDS broker

For each profile, a subject is specified. `*` means it will subscribe/publish
all messages. Otherwise, a mRID can be specified to limit to certain devices.
