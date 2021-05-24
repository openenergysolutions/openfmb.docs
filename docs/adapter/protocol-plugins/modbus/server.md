# Modbus Server

The `modbus-outstation` plugin exposes OpenFMB measurements as a Modbus server
for non-control OpenFMB profiles. It also maps Modbus write commands to OpenFMB
control messages.

## General Configuration

- `name`: the name used in the logs to identify the communication session.
- `log-level`: protocol log level to print to the logs
- `adapter`: network adapter to use to establish a TCP connection (typically
  0.0.0.0)
- `port`: TCP port on which the outstation will be listening
- `unit-identifier`: Modbus unit identifier of the outstation (aka address)
- `max-num-connections`: maximum number of concurrent TCP connections to the
  server

## Non-control Profiles

Non-control profiles (reading, status, etc) are mapped to Modbus coils, discrete
inputs, holding registers and input registers. When the message is received on
the internal message bus, it updates the internal Modbus database. Then, masters
polling the outstation read the updated values.

Each OpenFMB value can be mapped to multiple Modbus values.

### Boolean

OpenFMB Boolean values can be mapped to one or more coil and discrete input(s).
If `negate` is set to `true`, the OpenFMB value is negated before updating the
Modbus outstation.

```yaml tab="coil"
bool-field-type: mapped
actions:
    - destination-type: coil  # {none, coil, discrete_input}
    index: 10
    negate: false
```

```yaml tab="discrete_input"
bool-field-type: mapped
actions:
    - destination-type: discrete_input  # {none, coil, discrete_input}
    index: 11
    negate: true
```

### Int32, Int64 and Float

OpenFMB `int32`, `int64` and `float` values can be mapped to a Modbus holding
register or a Modbus input register. A scaling value can also be specified.

For 32-bit values, two indices are specified: one containing the two LSBs
and the other containing the two MSBs.

```yaml tab="sint16"
float-field-type: mapped
actions:
- destination-type: holding_register  # {none, holding_register, input_register}
    register-mapping: sint16  # {sint16, uint16, sint32, uint32, float32}
    index: 0
    scale: 1
```

```yaml tab="uint16"
float-field-type: mapped
actions:
- destination-type: input_register  # {none, holding_register, input_register}
    register-mapping: uint16  # {sint16, uint16, sint32, uint32, float32}
    index: 0
    scale: 1
```

```yaml tab="sint32"
float-field-type: mapped
actions:
- destination-type: holding_register  # {none, holding_register, input_register}
    register-mapping: sint32  # {sint16, uint16, sint32, uint32, float32}
    lower_index: 0
    upper_index: 1
    scale: 1
```

```yaml tab="uint32"
float-field-type: mapped
actions:
- destination-type: input_register  # {none, holding_register, input_register}
    register-mapping: uint32  # {sint16, uint16, sint32, uint32, float32}
    lower_index: 0
    upper_index: 1
    scale: 1
```

```yaml tab="float32"
float-field-type: mapped
actions:
- destination-type: holding_register  # {none, holding_register, input_register}
    register-mapping: float32  # {sint16, uint16, sint32, uint32, float32}
    lower_index: 0
    upper_index: 1
    scale: 1
```

### Enum

OpenFMB enumerations can be mapped to multiple values in the Modbus database.
For each variant, a coil or discrete input can be updated to a fixed value, or a
holding register or input register can be updated to a fixed value.

A list of each enum variant is specified with the desired actions to perform.

```yaml
enum-field-type: mapped
mapping:
    - name: DynamicTestKind_none
      actions:
        - destination-type: coil  # {none, coil, discrete_input, holding_register, input_register}
          index: 0
          value: true
    - name: DynamicTestKind_testing
      actions:
        - destination-type: discrete_input  # {none, coil, discrete_input, holding_register, input_register}
          index: 1
          value: false
    - name: DynamicTestKind_operating
      actions:
        - destination-type: holding_register  # {none, coil, discrete_input, holding_register, input_register}
          index: 2
          value: 42
    - name: DynamicTestKind_failed
      actions:
        - destination-type: input_register  # {none, coil, discrete_input, holding_register, input_register}
          index: 3
          value: 76
```

## Control Profiles

Modbus write commands can be translated to OpenFMB control profile messages.

There are three actions that can be specified for each point:

- `update`: simply updates the current profile
- `clean_and_update`: clears the current message and updates the value
- `publish`: updates the current message and sends it to the message bus

All the write targets are mapped to values in the internal database. Therefore,
a read will report the last written value.

### Boolean

Boolean values in control profiles can be mapped from Modbus writes to coils.
Optionally, the value can be negated.

```yaml
bool-field-type: mapped
command-source-type: coil  # {none, coil}
profile-action: update_and_publish  # {update, clear_and_update, update_and_publish}
index: 0
negate: false
```

### Int32, Int64 and Float

Integer and floating point values can be mapped from one or more holding
register writes. If multiple writes are required, be sure to use `update`.
Otherwise, transient values will be published.

```yaml tab="sint16"
float-field-type: mapped
command-source-type: holding_register  # {none, holding_register}
register-mapping: sint16  # {sint16, uint16, sint32, uint32, float32}
profile-action: update_and_publish  # {update, clear_and_update, update_and_publish}
index: 0
scale: 1
```

```yaml tab="uint16"
float-field-type: mapped
command-source-type: holding_register  # {none, holding_register}
register-mapping: uint16  # {sint16, uint16, sint32, uint32, float32}
profile-action: update_and_publish  # {update, clear_and_update, update_and_publish}
index: 0
scale: 1
```

```yaml tab="sint32"
float-field-type: mapped
command-source-type: holding_register  # {none, holding_register}
register-mapping: sint32  # {sint16, uint16, sint32, uint32, float32}
profile-action: update  # {update, clear_and_update, update_and_publish}
lower_index: 0
upper_index: 1
scale: 1
```

```yaml tab="uint32"
float-field-type: mapped
command-source-type: holding_register  # {none, holding_register}
register-mapping: uint32  # {sint16, uint16, sint32, uint32, float32}
profile-action: update  # {update, clear_and_update, update_and_publish}
lower_index: 0
upper_index: 1
scale: 1
```

```yaml tab="float32"
float-field-type: mapped
command-source-type: holding_register  # {none, holding_register}
register-mapping: float32  # {sint16, uint16, sint32, uint32, float32}
profile-action: update  # {update, clear_and_update, update_and_publish}
lower_index: 0
upper_index: 1
scale: 1
```

### Enum

Register writes can be mapped to OpenFMB enums. A list of enumeration variants
is provided with the source register value.

```yaml
enum-field-type: mapped
command-source-type: analog_output  # {none, analog_output}
profile-action: update_and_publish  # {update, clear_and_update, update_and_publish}
index: 10
mapping:
  - name: StateKind_off
    value: 0
  - name: StateKind_on
    value: 1
  - name: StateKind_standby
    value: 2
```

### Schedule parameters

These are currently not supported.
