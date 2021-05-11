---
sidebar_position: 2
---

# Reference Setup

In this reference setup you will see how to use OpenFMB with open source software
from [Open Energy Solutions Inc](https://openenergysolutionsinc.com).

The reference setup uses Docker and Docker Compose to run several
pre-built docker images containing open source software developed by Open Energy
Solutions and others.

1. A [NATS](https://nats.io) server
2. An [Adapter](https://github.com/openenergysolutions/openfmb.adapters) replaying pre-recorded data
3. A [HMI](https://github.com/openenergysolutions/openfmb.hmi) for visualizing and displaying the data coming from the Adapter over NATS.

## Installing Docker Compose

In order to run the demonstration you will need Docker and Docker Compose

Installing Docker Compose can be done by following the instructions at

[Install Docker Compose](https://docs.docker.com/compose/install/)

## Get The Demo Configuration

Next an archive of the demonstration setup can be obtained 

[Download Archive](https://github.com/openenergysolutions/openfmb.demo/archive/refs/heads/develop.zip)

## Running the Demo

Once you have the demo zip file, unzip it in a place of your choosing.

On Linux or Mac open a terminal. On windows open a cmd or powershell. Next cd into the unzipped demo directory and run the following command.

```docker-compose up```

At this point the demo running in a console should look similar to the screen
below.

![](img/demo_console_running.png)


## Browse to the HMI


While docker-compose is still running the HMI is accessible locally.

http://localhost:32771

Login with the username 'admin' and the password 'hm1admin'

The first screen should look similar to the one shown below.

![](img/demo_hmi_initial.png)

Browsing first to Diagrams

![](img/demo_hmi_diagrams.png)

Then to the microgrid diagram

![](img/demo_hmi_microgrid.png)

The information on the screen should be updating as time passes with new values
being displayed.

## Whats Happening in the Background

The values being updated in the HMI are coming from the Adapter publishing
pre-recorded OpenFMB messages encoded as [protocol buffers](https://developers.google.com/protocol-buffers/) with [NATS](https://nats.io)
acting as a message broker.

You should see replay_1 log messages in the console. Those are coming from the [Adapter](https://github.com/openenergysolutions/openfmb.adapters).

## Where to go from Here

The [Adapter](https://github.com/openenergysolutions/openfmb.adapters) is capable
of much more than replaying data. It is capable of mapping simulated and real
devices that provide commonly used power grid protocols such as DNP3 and Modbus.

It's also capable of recording all messages to a [PostgreSQL](https://postgresql.org) powered
[TimescaleDB](https://timescaledb.com). This allows for offline data analysis, dashboards powered by [Grafana](https://grafana.com) or other such visualization tools.

Lastly its the basis for a broader set of software Open Energy Solutions Inc is
developing to enable Distributed Intelligence for the power grid.

:::information
If you would like to learn more or discuss how we can help, please [Contact Us](mailto:adapter.support@openenergysolutionsinc.com)
