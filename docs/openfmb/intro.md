---
sidebar_position: 1
---

# OpenFMB 

Open Field Message Bus ([OpenFMB](https://openfmb.io)) is a reference architecture for interoperability with a common data model derived from IEC 61968/61970 (CIM) and IEC 61850. OpenFMB is developed by a coalition and defined in UML using Enterprise Architect. The coalition consists of industry leaders, national labs, and independent software and hardware vendors. 

OpenFMB enables semantically useful peer-to-peer communication in a heterogeneous ecosystem of vendors, devices, and software. 


## Peer to Peer

Today, the power grid is primarily centralized using messaging without semantic meaning. A centralized, semantic-free communications scheme worked well while power generation and demand remained relatively static and consistent. However, power generation and demand are increasingly dynamic and inconsistent, driving the need for change in the way devices communicate. 

![](/img/MoreDataInTheGridThanWeWant-20180414a.png)

Layered control and monitoring are enabled with peer-to-peer communications using OpenFMB. 

![](/img/LayeredCoordination-20180918a.png)

Distributed intelligence is seen as critical enabling technology for the future of power grids. With the increased proliferation of distributed power, renewable sources, and other novel capabilities, as well as increased consumer requirements, the electrical grid (especially at the edge) must become more proficient/adept, nimble, and responsive. Today’s centralized systems simply can’t meet these requirements. 

## Publish Subscribe Topic Structure

OpenFMB provides a common data model and prescribes the use of a publish and subscribe bus with structured topics. 

The topic structure of OpenFMB consists of a common OpenFMB prefix followed by the module, message profile, and finally the device id (mRID/UUID). 

An example topic using MQTT might be:

```openfmb/solarmodule/SolarStatusProfile/540b292a-e600-4ae4-b077-40b892ae6970```

And the equivalent NATs topic with dot separators: 

```openfmb.solarmodule.SolarStatusProfile.540b292a-e600-4ae4-b077-40b892ae6970```

The topic structuring allows for a great deal of flexibility in what each program connected to a bus may be interested in subscribing to, with the potential of using wildcards when useful.

## Common Message Information

Every message contains an mRID (UUID) to identify the device and another to uniquely identify the message. Additionally, every message requires a timestamp. 

## Message Types

There are five types of generalized messages: Reading, Status, Event, Control, and DiscreteControl. 

### Reading

Commonly provides meter-like readings. 

### Status

Status messages are periodically published from each device. They contain general state information about the device such as switch state, meter readings, storage, and state of charge. 

### Event

A device may autonomously change its state or be asked to do so through a (discrete) control message. Event messages are intended to be published upon state changes. 

### Control

Control messages commonly describe a schedule of requested state changes. 

### Discrete Control

Discrete control messages are immediate requests to change device state. 

## Modules

Common data models are grouped into modules, which encompass commonly exchanged information by a family of devices. 

A good number of modules exist today and are likely to be expanded on. A variety of loads, sources, storage, switching, controls, and more. 

Some of the useful modules that OpenFMB provides include:  

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

Exploring the messages, their UML, and attributes is highly encouraged to get a sense of what each module can do. 

## Additional Reading

More information on OpenFMB can be found at: 

* [OpenFMB Site](https://openfmb.io)
* [UCA OpenFMB Site](https://openfmb.ucaiug.org/)
