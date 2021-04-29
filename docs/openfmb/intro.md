---
sidebar_position: 1
---

# Introduction to OpenFMB (Open Field Message Bus)

[OpenFMB](https://openfmb.io) is a publish/subscribe protocol with a common data
model derived from IEC 61850. The data model is developed by a coalition and
defined in UML using Enterprise Architect. It is rightly named the Platform
Independent Model (PIM). OpenFMB provides several potential message encodings
called Platform Specific Models (PSM) (protobufs and DDS currently), and
supports several publish/subscribe protocols (MQTT, NATs, DDS).

The coalition consists of industry leaders, national labs, and independent
software and hardware vendors.

## Topic Structure

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

A good number of profiles exist today and are likely to be expanded on to
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

## OpenFMB in a Nutshell

A data model to support sharing information among devices and controllers with
common message formats and protocols.
