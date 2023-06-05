---
sidebar_position: 1
sidebar_label: Introduction
---


# Adapter

The [Adapter](https://github.com/openenergysolutions/openfmb.adapters) is a portable application that can translate non-OpenFMB protocols into OpenFMB and bridge various OpenFMB transports such as NATS, MQTT, and DDS.
<br/>
The following protocols are currently supported by the OpenFMB Adapter:

- DNP3 master and outstation
- MODBUS master and outstation
- <i>OCPP 1.6*</i>
- <i>ICCP client and server (IEC60870-6)*</i>
- <i>IEC-61850 client and server, both GOOSE and MMS (IEC-61850)*</i>
- <i>OpenADR*</i>
- <i>SEP2.0 (IEEE 2030.5)*</i>

:::info
(*) Required licensing.  Please [contact us](mailto:support@openenergysolutionsinc.com?Subject=Adapter) for more information.
:::

The sections below describe these two primary use cases.

## Protocol translator

The Adapter can act as a protocol translator for equipment communicating with other protocols such as DNP3 (IEEE 1815-2012) and Modbus TCP. Several other protocols are supported by Open Energy Solutions, but they require a license as they use licensed protocol libraries. 

The mapping from the other protocols to OpenFMB is configured using a YAML model of a specific OpenFMB profile and protocol-specific metadata. The Adapter then communicates with the device using the other protocol to obtain the values. The Adapter fills in a Protobuf representation of the profile and publishes it to an internal bus to which other plugins may subscribe. When acting as a translator, a native plugin will then publish the profile to an OpenFMB transport such as NATS. 

The following example shows an Adapter used to connect equipment using legacy protocols to an OpenFMB NATS broker. 

![Adapter acting as a protocol translator](./img/protocol-translator.svg)

## Transport bridge

The Adapter can also be used as a transport bridge between two OpenFMB networks. An Adapter can be placed on the edge between the two networks and subscribe to one network. The profiles can be filtered, and some or all of them can be republished onto the other network. 

When the Adapter is used as a transport bridge between networks, it is necessary to ensure that a bridged message is not returned to a previous network. For instance, bidirectional bridging of all OpenFMB Readings profiles between two networks would create an infinite loop. 

If all the control applications are in one network and all IEDs in another network, the event, reading, and status messages must be bridged to the network with the control applications, and the control messages must be bridged to the network with the IEDs. 

On the other hand, if all the control applications and all IEDs are on both networks for bridging, then messages would need to be filtered by device mRID to restrict flow to the proper direction. 

The example below shows an Adapter configured to bridge an OpenFMB MQTT broker to an OpenFMB DDS network. 

![Adapter acting as a communication bridge](./img/comm-bridge.svg)
