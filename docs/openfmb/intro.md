---
sidebar_position: 1
---

# OpenFMB 

[OpenFMB](https://openfmb.io) or Open Field Message Bus is a publish/subscribe
protocol with a common data model derived from IEC 61850. The data model is
developed by a coalition and defined in UML using Enterprise Architect. It is
rightly named the Platform Independent Model (PIM). OpenFMB provides several
potential message encodings called Platform Specific Models (PSM) (protobufs and
DDS currently), and supports several publish/subscribe protocols (MQTT, NATs,
DDS).

The coalition consists of industry leaders, national labs, and independent
software and hardware vendors.


## Goals of OpenFMB

The goal of OpenFMB is to allow for localized peer to peer communication
as opposed to the centralized communication that occurs today.

![](/img/MoreDataInTheGridThanWeWant-20180414a.png)

Allowing for localized peer to peer communication brings another use case, 
using OpenFMB for layered coordination.

![](/img/LayeredCoordination-20180918a.png)

These are important ideas for the future of power grids as distributed power with
renewable sources becomes the norm.

## Publish Subscribe Topic Structure

OpenFMB provides a common data model and prescribes the use of a publish
and subscribe bus with structured topics

The topic structure of OpenFMB consists of a common OpenFMB prefix followed
by the module, message profile, and finally the device id (mRID/UUID).

An example topic using MQTT might be

```openfmb/solarmodule/SolarStatusProfile/540b292a-e600-4ae4-b077-40b892ae6970```

And the equivalent NATs topic with dot seperators

```openfmb.solarmodule.SolarStatusProfile.540b292a-e600-4ae4-b077-40b892ae6970```

This allows for a great deal of flexibility in *what* each program connected to a
bus may be interested in publishing or subscribing to, with the potential of
using wildcards where useful.

## Common Message Information

Every message contains an mRID (UUID) to identify the device and another for to 
uniquely identify the message. Additionally every message requires a timestamp.

## Message Types

Messages are of 3 generalized types, Status, Event, and Control.

### Status

Status messages are commonly published periodically from each device, they contain
general state information about the device such as switch state, meter readings,
storage state of charge.

### Event

A device may autonomously change its state or be asked to do so through a control
message. Event messages are meant to be published upon state changes.

### Control

Control messages are aptly named, they are meant to control or modify the state
of a device.

## Modules

Common data models are grouped into modules which encompass commonly exchanged
information by a family of devices.

A good number of modules exist today and are likely to be expanded on to
encompass the modern world power grids live in. A variety of loads, sources,
storage, switching, controls and more.

Some of the useful modules that OpenFMB provides

* Breaker
* Cap Bank
* ESS
* Generation 
* Interconnection
* Load
* Meter
* Recloser
* Regulator
* Reserve
* Resource
* Solar
* Switch

Exploring the messages, their UML and attributes is highly encouraged to get a
sense of what each can do.

## Additional Reading

More information on OpenFMB can be found at

* [OpenFMB Site](https://openfmb.io)
* [UCA OpenFMB Site](https://openfmb.ucaiug.org/)
