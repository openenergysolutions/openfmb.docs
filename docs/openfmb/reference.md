---
sidebar_position: 2
---

# Reference Setup

In this reference setup you will see how to use OpenFMB with open source software
from [Open Energy Solutions Inc](https://openenergysolutionsinc.com).

The reference setup uses Docker and Docker Compose to run several
pre-built docker images containing open source software developed by Open Energy
Solutions and others.

1. A [nats](https://nats.io) message broker
2. A [openfmb.adapter](https://github.com/openenergysolutions/openfmb.adapters) replaying pre-recorded data
3. A [openfmb.hmi](https://github.com/openenergysolutions/openfmb.hmi) HMI for visualizing and displaying the data coming from the adapter over NATS.

## Installing Docker Compose

In order to run the demonstration you will need Docker and Docker Compose

Installing Docker Compose can be done by following the instructions at

[Install Docker Compose](https://docs.docker.com/compose/install/)

## Get The Demo Configuration

Next an archive of the demonstration setup can be obtained 

[Download Archive](https://github.com/openenergysolutions/openfmb.demo/archive/refs/heads/develop.zip)

## Running the Demo

Once you have the demo zip file, unzip it in a place of your choosing.

In Linux or Mac open a terminal. On windows open the command line. cd into the unzipped demo directory and simply run

```docker-compose up```

At this point the demo setup should be running.

## Browse to the HMI

At this point, with the demo running in a console much like the screenshot below
shows

![](img/demo_console_running.png)

You should be able to browse to

http://0.0.0.0:32771

And see the HMI. What it should look like is shown here

![](img/demo_hmi_initial.png)

You should be able to browse to diagrams which will list the microgrid diagrams

![](img/demo_hmi_diagrams.png)

And finally view the microgrid diagram

![](img/demo_hmi_microgrid.png)

## Whats Happening in the Background

Now that we can see the microgrid values will be updating. Whats really going on
here?

The replay_1 log messages in the console are coming from th [openfmb.adapter](https://github.com/openenergysolutions/openfmb.adapters) as
it starts its configured to connect to [nats](https://nats.io) for 
publish/subscribe of openfmb messages encoded as [protocol buffers](https://developers.google.com/protocol-buffers/)
