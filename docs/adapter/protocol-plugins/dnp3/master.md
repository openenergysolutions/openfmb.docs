# DNP3 Master

The `dnp3-master` plugin acquires measurement data and sends controls to DNP3
outstations. It maps DNP3 measurement values (binary, analog, etc) to OpenFMB
non-control profiles and sends DNP3 commands (e.g. binary/analog output) in
response to OpenFMB control profiles.

## General configuration

- `name`: Name used in the logs to identify the communication session.
- `channel`
    - `adapter`: Network adapter to use to establish a TCP connection (typically 0.0.0.0)
    - `outstation-ip`: IP address of the outstation. Can also be a domain name.
    - `port`: TCP port on which the outstation is listening.
- `protocol`
    - `master-address`: DNP3 link-layer address of the master (the adapter).
    - `outstation-address`: DNP3 link-layer address of the outstation (remote device)
    - `unsol-class-1`: Enable Class 1 unsolicited responses.
    - `unsol-class-2`: Enable Class 2 unsolicited responses.
    - `unsol-class-3`: Enable Class 3 unsolicited responses.

## Poll configuration

The `polls` parameter contains a list of polls to be executed by the adapter.
Each poll has a name that might be referenced in the non-control profile
mappings. This is particularly useful for event profiles, where you want to
publish an event profile only when events are received, not on every message.

There are two types of polls. `integrity` is a Class 1230, meaning it gets the
sequence of events (and empties the event buffers) and it also gets all the
static (current) values. This should be used for status and reading profiles.
An `event` poll only asks for the sequence of events assigned to a specific
class. It should be used for used for event profiles. In the configuration,
it is possible to specify which classes to ask for.

The interval specifies the delay between two polls.

```yaml tab="integrity"
- name: integrity_poll
  type: integrity
  interval-ms: 5000
```

```yaml tab="event"
- name: event_poll
  type: event
  interval-ms: 5000
  class1: true
  class2: true
  class3: false
```

## Non-control profiles

Non-control profiles (reading, status, etc) are mapped from DNP3 measurement points.

A `poll-name` parameter is required and must point to a valid poll defined the
[Polls Configuration](./#polls-configuration) section. An OpenFMB profile
will be generated on every non-empty response of the poll.

### Boolean

DNP3 binary inputs can be mapped directly to an OpenFMB boolean value.

```yaml
bool-field-type: mapped
source-type: binary  # {none, binary}
index: 10
```

### Int32 and Int64

DNP3 analog inputs and counters can be mapped to an OpenFMB `int32` or an
OpenFMB `int64`. A scaling can be applied to the value.

```yaml tab="analog"
int32-field-type: mapped
source-type: analog  # {none, analog, counter}
index: 10
scale: 1000
```

```yaml tab="counter"
int32-field-type: mapped
source-type: counter  # {none, analog, counter}
index: 10
scale: 1000
```

### Float

DNP3 analog inputs can be mapped to an OpenFMB `float` value. A scaling can be applied to
the value.

```yaml
float-field-type: mapped
source-type: analog  # {none, analog}
index: 10
scale: 1000
```

### Enum

OpenFMB enumerations can be mapped from DNP3 binary, analog, and counter source points.

Binary inputs have an enumeration value specified for 'true' and 'false'. Analog and counter
mappings allow for a free form mapping. If no association is found in the mapping list,
the field is simply not set.

Since analog inputs might be reported as a floating point value, an epsilon of 0.001 is used for comparison. 


```yaml tab="binary"
enum-field-type: mapped
source-type: binary  # {none, binary, analog, counter}
index: 10
when-true: DynamicTestKind_none
when-false: DynamicTestKind_testing
```

```yaml tab="analog"
enum-field-type: mapped
source-type: analog  # {none, binary, analog, counter}
index: 10
mapping:
  - value: 4
    name: DynamicTestKind_none
  - value: 24
    name: DynamicTestKind_testing
```

```yaml tab="counter"
enum-field-type: mapped
source-type: counter  # {none, binary, analog, counter}
index: 10
mapping:
  - value: 4
    name: DynamicTestKind_none
  - value: 24
    name: DynamicTestKind_testing
```

## Control profiles

OpenFMB control profiles are translated to DNP3 binary and analog output
commands. All commands are executed with a Direct Operate function code
(`0x05`).

A `command-order` list is used to prior every command referenced in the detailed
mappings. The first element in the list has the highest priority, and will be
sent first to the outstation.

The `tolerance-ms` parameter is used to specify the tolerance for schedule
parameters. See the [Scheduling](/misc/scheduling) page for more details.

### Boolean

Boolean values in control profiles can be mapped to one or more DNP3 commands. A
list of commands is specified for when the boolean value is both true and false.

The possible commands are either Control Relay Output Block (`g12v1`) or an
Analog Output command (`g41v1`, `g41v2`, `g41v3`, `g41v4`).

CROBs can execute any control code specified in IEEE 1815-2012. The following
table shows all the possible values:

| Control Codes           |
|-------------------------|
| `NUL`                   |
| `NUL_CANCEL`            |
| `PULSE_ON`              |
| `PULSE_ON_CANCEL`       |
| `PULSE_OFF`             |
| `PULSE_OFF_CANCEL`      |
| `LATCH_ON`              |
| `LATCH_ON_CANCEL`       |
| `LATCH_OFF`             |
| `LATCH_OFF_CANCEL`      |
| `CLOSE_PULSE_ON`        |
| `CLOSE_PULSE_ON_CANCEL` |
| `TRIP_PULSE_ON`         |
| `TRIP_PULSE_ON_CANCEL`  |

Analog Output
variations specify how the casting will be applied, as specified by IEEE
1815-2012. The following table shows the casting applied:

| Variation | Type   |
|-----------|--------|
| `g41v1`   | Int32  |
| `g41v2`   | Int16  |
| `g41v3`   | Float  |
| `g41v4`   | Double |

```yaml tab="g12v1"
- command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}
  index: 10
  command-id: some-command-id
  control-code: LATCH_OFF
  count: 1
  on-time-ms: 1000
  off-time-ms: 2000
```

```yaml tab="g41v1"
- command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}
  index: 10
  command-id: some-command-id
  value: 24
```

```yaml tab="g41v2"
- command-action-type: g41v2  # {g12v1, g41v1, g41v2, g41v3, g41v4}
  index: 10
  command-id: some-command-id
  value: 12
```

```yaml tab="g41v3"
- command-action-type: g41v3  # {g12v1, g41v1, g41v2, g41v3, g41v4}
  index: 10
  command-id: some-command-id
  value: 0.12
```

```yaml tab="g41v4"
- command-action-type: g41v4  # {g12v1, g41v1, g41v2, g41v3, g41v4}
  index: 10
  command-id: some-command-id
  value: 0.1234
```

### Int32, Int64 and Float

Integer and floating point values can be mapped to Analog Output commands, with
optional scaling. A particular variation of Group 41 can be specified for proper
casting.

```yaml tab="Int32"
int32-field-type: mapped
outputs:
  - command-id: some-command-id
    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}
    index: 10
    scale: 1.0
```

```yaml tab="Int64"
int64-field-type: mapped
outputs:
  - command-id: some-command-id
    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}
    index: 10
    scale: 1.0
```

```yaml tab="Float"
float-field-type: mapped
outputs:
  - command-id: some-command-id
    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}
    index: 10
    scale: 1.0
```

### Enum

Each enumeration variant can be mapped to DNP3 commands in the same manner as
[Boolean](./#boolean_1) fields.

```yaml
enum-field-type: mapped
mapping:
  - name: GridConnectModeKind_UNDEFINED
    outputs:
      - command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}
        index: 10
        command-id: some-command-id
        control-code: LATCH_ON
        count: 1
        on-time-ms: 1000
        off-time-ms: 1000
  - name: GridConnectModeKind_CSI
    outputs:
      - command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}
        index: 10
        command-id: some-command-id
        value: 25
```

### Schedule parameters

Each schedule parameter can be mapped to DNP3 Analog Output commands in the same
manner as [Int32, Int64 and Float](./#int32-int64-and-float) fields. Schedules
will be executed as described in [Scheduling](/misc/scheduling) page.

```yaml
- scheduleParameter:  # A sequence of schedule parameters w/ enum + value. Each plugin specifies what to do with each enumeration value
  - scheduleParameterType: ScheduleParameterKind_none
    outputs:
      - command-id: some-command-id
        command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}
        index: 10
        scale: 1.0
  - scheduleParameterType: ScheduleParameterKind_other
    outputs:
      - command-id: some-command-id
        command-action-type: g41v2  # {g41v1, g41v2, g41v3, g41v4}
        index: 11
        scale: 1.0
```
