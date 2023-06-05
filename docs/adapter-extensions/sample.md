---
sidebar_position: 2
sidebar_label: Sample Extension
---

# How to Write an Extension

The objective is to leverage our developed extension framework to establish communication with a fictional smart plug device that utilizes UDP protocol. This extension framework enables seamless integration of different protocol adapters written in various programming languages, facilitating efficient and flexible communication with such devices.

For a demonstration of the implementation, please refer to the [repository](https://github.com/openenergysolutions/openfmb.adapters.udp) provided. The sample code available in the repository is the UDP OpenFMB Adapter, which is implemented in Rust programming language. This adapter leverages an `inside-container` communication bus. When data is received from the fictional smart plug device, the UDP OpenFMB Adapter will publish a `SwitchStatusProfile` indicating the plug's On/Off state, as well as a `SwitchReadingProfile` providing voltage, current, and power measurements. Additionally, the UDP OpenFMB Adapter subscribes to the `SwitchDiscreteControlProfile`, enabling it to turn the smart plug On/Off based on the received commands.

# Sources

The sample of an adapter extension can be found in this [repository](https://github.com/openenergysolutions/openfmb.adapters.ext).

```bash
git clone https://github.com/openenergysolutions/openfmb.adapters.ext
```

This repository contains Docker build files and examples to demonstrate how an adapter extension works.  See `examples` directory below.

```
.
├── Dockerfile
├── README.md
├── build.sh
├── examples
│   ├── dnp3-master
│   │   ├── adapter.yaml
│   │   ├── docker-compose.yaml
│   │   └── template.yaml
│   ├── hmi
│   │   ├── config
│   │   │   └── app.toml
│   │   ├── diagrams
│   │   │   └── 25a5c7c3-486c-4956-8eb0-49617bfc46f8.json
│   │   ├── docker-compose.yaml
│   │   ├── equipment.json
│   │   └── users.json
│   ├── plug-simulator
│   │   └── config.json
│   ├── scenario-1
│   │   ├── adapters
│   │   │   ├── bridge-adapter.yaml
│   │   │   ├── udp-adapter.yaml
│   │   │   └── udp-template.yaml
│   │   ├── docker-compose.yaml
│   │   ├── launcher
│   │   │   └── config.yaml
│   │   └── tmp
│   └── scenario-2
│       ├── adapters
│       │   ├── bridge-adapter.yaml
│       │   ├── dnp3-outstation-template.yaml
│       │   ├── udp-adapter.yaml
│       │   └── udp-template.yaml
│       ├── docker-compose.yaml
│       ├── launcher
│       │   └── config.yaml
│       └── tmp
└── replace-ip-address.sh
```

# Docker Image

Run the build script to build the Docker image:

```bash
./build.sh
```

Or just pull from OES's Dockerhub:

```bash
docker pull oesinc/openfmb.adapters.ext
```

# Launcher App

Launcher is an app that acts as the entry point of the Docker image.  The following configuration is used by the Launcher:

```yaml
---
launcher:
  log_level: Debug
adapters: 
  - name: oes-plug
    type: oes-plug
    config: /adapters/udp-adapter.yaml
  - name: bridge-master
    type: pub-sub-bridge    
    config: /adapters/bridge-adapter.yaml 
...
```
The following adapter types (`adapters.type`) are supported by the launcher:

- dnp3-master (DNP3)
- dnp3-outstation (DNP3)
- modbus-master (MODBUS)
- modbus-outstation (MODBUS)
- pub-sub-bridge (bridging between pub/sub protocols such as NATS, MQTT, ZENOH, DDS**)
- oes-plug (the OES fictitious smart plug speaking UDP)*
- <i>ocpp-adapter (OCPP 1.6)**</i>
- <i>iccp-client (IEC60870-6)**</i>
- <i>iccp-server (IEC60870-6)**</i>
- <i>IEC61850-client (IEC61850)**</i>
- <i>IEC61850-server (IEC61850)**</i>
- <i>openadr (OpenADR)**</i>
- <i>ieee2030.5 (IEEE 2030.5)**</i>

:::info
(*)  This sample plug-in/extension
(**) Required appropriate licensing
:::

# Examples

These examples are intented to be run on <b>Linux OS.</b>

Before running the examples, run `replace-ip-address.sh` script.  Replace `<MY_COMPUTER_IP_ADDRESS>` with your computer's IP address.

```bash
HOST_IP_ADDRESS=<MY_COMPUTER_IP_ADDRESS> ./replace-ip-address.sh
```

To demonstrate, consider these two scenarios:

## Scenario 1

To be able to monitor the OES fictitious smart plug data, and turn it on/off using OpenFMB via NATS pub/sub protocol:
   - Note that the UDP OpenFMB Adapter doesn't support NATS.  We are utilizing the protocol-bridge functionality of the OpenFMB Adapter Framework extension

![](/img/openfmb-adapter-extensions-scenario-1.png)

To run the adapters, run:

```bash
cd examples/scenario-1
docker-compose up
```

The `docker-compose` command shall start:
- an UDP Plug simulator (software simulator of the OES fictitious smart plug)
- a NATS broker
- an UDP extension adapter

Now, to monitor the smart plug as well as turn it ON/OFF, we can stand up an OES' Human Machine Interface (HMI) tool by running:

```bash
cd ../hmi
docker-compose up
```


## Scenario 2

To be able to monitor the OES fictitious smart plug data and turn it on/off using DNP3 protocol
   - We are internally translating UDP datagram into DNP3
   - The OpenFMB adapter acts as a DNP3 outstation to serve data to a connected DNP3 master program

![](/img/openfmb-adapter-extensions-scenario-2.png)

To run the adapters, run:

```bash
cd examples/scenario-2
docker-compose up
```
The `docker-compose` command shall start:
- an UDP Plug simulator (software simulator of the OES fictitious smart plug)
- an UDP extension adapter exposes its data as a DNP3 outstation
    
The DNP3 outstation data points:
- Binary Input 0 for the plug status ON/OFF
- Binary Output 0 to turn the plug ON/OFF
- Analog Inputs: Current = 0; Voltage: 1; Power: 2

To interrogate data, use a DNP3 master software to connect to the outstation:
- IP address: same as `<MY_COMPUTER_IP_ADDRESS>` above
- Port: 20000
- Master Address: 1
- Outstation Address: 10

:::tip
To monitor and control the smart plug, we can deploy OES' Human Machine Interface (HMI) tool. Additionally, we can set up a DNP3 Master OpenFMB Adapter, which establishes a connection with the outstation and publishes data on the NATS messaging system. This combination of tools allows for comprehensive monitoring of the smart plug's status and enables the ability to remotely toggle its power On/Off.

```bash
cd ../dnp-master
docker-compose up -d
cd ../hmi
docker-compose up
```
:::

# HMI Screen

![image](/img/udp-hmi-demo.png)