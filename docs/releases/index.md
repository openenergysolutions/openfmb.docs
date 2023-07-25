---
sidebar_position: 1
---

# Release Notes

## OpenFMB Adapter 1.0

- OpenFMB 2.0 data model
- OpenFMB Adapter: DNP3 and MODBUS
- OpenFMB Adapter Configuration Tool
- OpenFMB HMI
- OpenFMB Protobuf Exporter

## OpenFMB Adapter 2.1

**NOTES:**
The version is bumped to 2.1 to match with the OpenFMB 2.1 data model.

### OpenFMB Adapter:

- Supports the latest OpenFMB v2.1 data model, offering:
  - Grid Code functions for DER
  - Discrete controls for ESS and Solar
  - Capability profiles to advertise device nameplate and rating information
- Provides an [extension](../adapter-extensions/index.md) to the OpenFMB Adapter Framework:
  - Enhances an existing [OpenFMB Adapter Framework](https://github.com/openenergysolutions/openfmb.adapters) by extending its capabilities to support multiple protocols, regardless of the programming language used
  - Leverages the existing OpenFMB Adapter Framework's functionalities, such as MQTT, NATS, DNP3, MODBUS, and more
  - Promotes interoperability and compatibility across different systems and protocols
- Utilizes the [OpenFMB Adapter Extension](../adapter-extensions/index.md) to incorporate various new protocols:
  - OCPP 1.6
  - ICCP client and server (IEC60870-6)
  - IEC-61850 client and server, both GOOSE and MMS
  - OpenADR
  - SEP 2.0 (IEEE 2030.5)
- [Sample code](../adapter-extensions/sample.md) for writing an extension
- Bugs and enhancements:
  - Fixed regex to search for known fields in the historian archiver
  - Fixed a bug that failed to handle NaN in DNP3 analog inputs
  - Handled grid code curve points
  - Allowed optional configuration node for backward compatibility
  - Added the ability for the historian database to store data at a configurable interval (ex. Store data every 30 secs)
  - MODBUS master: Write multiple registers for float field types
  - Schema writer to include file and version information

### OpenFMB Adapter Configuration Tool:

- Supports the latest OpenFMB v2.1 data model
- Provides suggestions to migrate configuration to OpenFMB 2.1
- Bugs and enhancements:
  - Migration dialog to help migrate from version 2.0 to 2.1
  - Fixed scale factor with the wrong decimal places
  - Fixed cut-off layout on profile selection control

### OpenFMB HMI

- Supports the latest OpenFMB v2.1 data model
- Bugs and enhancements:
  - Added a visibility property to hide/show based on specific data conditions
  - Used windows.location for host information instead of reading from the configuration file
  - Removed redundant configuration items
  - Multi-arch docker build

