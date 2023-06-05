---
sidebar_position: 1
---

# OpenFMB Adapter Extension

The objective is to enhance an existing [OpenFMB Adapter Framework](https://github.com/openenergysolutions/openfmb.adapters) by extending its capabilities to support multiple protocols, regardless of the programming language used. This expansion will allow seamless integration with various systems and enable communication using different protocols.

One key aspect of this extension is the ability to leverage the existing OpenFMB Adapter Framework's functionalities, such as MQTT, NATS, DNP3, MODBUS, and more. These features provide robust communication channels and protocol-specific implementations that can be utilized by the newly added plugins or extensions.

By incorporating this extension mechanism, developers can write custom plugins or extensions in their preferred programming languages. This flexibility enables them to leverage their existing knowledge and expertise while expanding the framework's protocol support. Whether it's implementing a custom UDP datagram speaker, integrating with OCPP1.6, or storing telemetry data in databases, the extended framework provides the necessary tools and infrastructure.

The extended framework also promotes interoperability and compatibility across different systems and protocols. It allows seamless communication between components written in different programming languages, facilitating integration with a wide range of devices and platforms.

## Zenoh Bus

[Zenoh](https://zenoh.io/) bus is used as an `internal/inside-container` communication channel between the extension app and the [OpenFMB Adapter](https://openfmb.openenergysolutions.com/docs/adapter/) written by [OES](https://openenergysolutions.com/).

## Block Diagram

![](/img/openfmb-adapter-extensions.png)
