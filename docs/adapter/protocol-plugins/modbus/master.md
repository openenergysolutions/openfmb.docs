# Modbus Master

The `modbus-master` plugin acts as a Modbus client (master) that can read and
write Modbus coils, discrete inputs, input registers and holding registers.

The adapter automatically determines what to poll based on the types and indices
referenced in detailed mapping.

## General configuration

- `session`: name used in the logs
- `log-level`: protocol log level to print to the logs
- `remote-ip`: IP of the device to connect to
- `port`: port of the device to connect to (usually 502)
- `unit-identifier`: Modbus unit identifier of the device to connect to
- `response_timeout_ms`: timeout value in milliseconds for responses
- `always-write-multiple-registers`: when set to `true`, even if only a single
  register must be written, a "Write Multiple Registers" (0x10) is used.
- `auto_polling`: when deciding what polling requests are needed to get all the
  necessary values, this parameter configures the number of unnecessary values
  we are willing to accept for the benefit of fewer Modbus requests. A value of
  `0` means absolutely no unnecessary registers will be polled.
    - `auto_polling.max_bit_gaps`: maximum number of unnecessary bits that can
      be read when polling for coils and discrete inputs.
    - `auto_polling.max_register_gaps`: maximum number of unnecessary registers
      that can be read when polling for holding and input registers.

### Heartbeat

Some devices require a periodic heartbeat message to remain in a remotely
managed mode. Typically, a specific register must be read, some bits inverted
and written back. The adapter can handle this functionality with the
`heartbeats` configuration parameter. A list of indices to perform the heartbeat
on is specified, as well as the period and the mask to use for inverting the
bits. Here is an example for a device with a single heartbeat register:

```yaml
heartbeats:
  - index: 7  # Read the specified register, invert the masked bits, and write it back
    period_ms: 1000  # Heartbeat period in milliseconds
    mask: 0x1  # Mask specifying the bits to invert
```

## Non-control profiles

The non-control profiles can map Modbus coils, input, and holding registers to
an OpenFMB message values.

### Configuration

- `poll_period_ms`: specify the number of milliseconds between two polls

### Boolean

Boolean values can be retrieved from coils and discrete inputs. Optionally, the
value can be inverted.

Boolean values may also be retrieved from holding registers and input registers.
A mask is applied to the register value. If the value is not equal to 0, the
boolean is `true`, otherwise it's `false`. It is possible to add an `invert:
true` parameter. In that case, if the masked value is different than 0, the
boolean is `false`, otherwise it's `true`.

```yaml tab="coil"
bool-field-type: mapped
source-type: holding_register  # {none, coil, discrete_input, holding_register, input_register}
index: 10
invert: false  # invert the boolean value.
```

```yaml tab="discrete_input"
bool-field-type: mapped
source-type: discrete_input  # {none, coil, discrete_input, holding_register, input_register}
index: 11
invert: true  # invert the boolean value.
```

```yaml tab="holding_register"
bool-field-type: mapped
source-type: holding_register  # {none, coil, discrete_input, holding_register, input_register}
index: 13
mask: 0x0001  # mask the register. true if masked value != 0
invert: false  # invert the boolean value.
```

```yaml tab="input_register"
bool-field-type: mapped
source-type: input_register  # {none, coil, discrete_input, holding_register, input_register}
index: 14
mask: 0x0004  # mask the register. true if masked value != 0
invert: true  # invert the boolean value.
```

### Int32, Int64 and Float

Int32, Int64 and Float values can be retrieved from holding registers and input
registers. The `source-type` field determines what type of registers must be
read.

There are multiple mapping types that can be used to derive the value. All of
the mapping types can be scaled.

All 16-bit mapping types require a single holding register, so a single `index`
value is needed. All 32-bit mapping types require two indices. The `lower_index`
identifies the register containing the two least significant bytes (LSBs). The
`upper_index` identifies the register containing the two most significant bytes
(MSBs). For example, if the 32-bit value that needs to be written is
`0xAABBCCDD` and you set the `lower_index` to 10 and `upper_index` to 11, then
`0xCCDD` would be written to register 10 and `0xAABB` would be written to
register 11. If `lower_index` is 11 and `upper_index` is 10, then `0xAABB` would
be written to register 10 and `0xCCDD` would be written to register 11.

The mapping types starting with an "s" means they are signed (they are two's
complement integers). The mapping types starting with a "u" are unsigned.

The "with_modulus" mappings take an extra `modulus` parameter and allow for
scaling the MSB register using a value other than 65536. Most users will never
use this as it was added to accomodate a peculiar device.

The "float" type reads an IEEE 754 floating-point value from two registers.

```yaml tab="sint16"
float-field-type: mapped
source-type: holding_register  # {none, holding_register, input_register}
register-mapping: sint32  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
index: 10
scale: 1
```

```yaml tab="uint16"
float-field-type: mapped
source-type: input_register  # {none, holding_register, input_register}
register-mapping: uint16  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
index: 10
scale: 1
```

```yaml tab="sint32"
float-field-type: mapped
source-type: holding_register  # {none, holding_register, input_register}
register-mapping: sint32  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
lower_index: 0
upper_index: 1
scale: 1
```

```yaml tab="uint32"
float-field-type: mapped
source-type: input_register  # {none, holding_register, input_register}
register-mapping: uint32  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
lower_index: 0
upper_index: 1
scale: 1
```

```yaml tab="sint32_with_modulus"
float-field-type: mapped
source-type: holding_register  # {none, holding_register, input_register}
register-mapping: sint32_with_modulus  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
lower_index: 0
upper_index: 1
modulus: 10000
scale: 1
```

```yaml tab="uint32_with_modulus"
float-field-type: mapped
source-type: input_register  # {none, holding_register, input_register}
register-mapping: uint32_with_modulus  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
lower_index: 0
upper_index: 1
modulus: 10000
scale: 1
```

```yaml tab="float32"
float-field-type: mapped
source-type: holding_register  # {none, holding_register, input_register}
register-mapping: float32  # {sint16, uint16, sint32, uint32, sint32_with_modulus, uint32_with_modulus, float32}
lower_index: 0
upper_index: 1
scale: 1
```

### Enum

Enums can be retrieved from one or more registers.

When retrieved from a single register, a mask is applied and each enum value is
associated with a register value.

When multiple registers are used, a list of indices and bit position is
specified. The adapter will poll the the appropriate register and update a
virtual value with each specified bit. Then, a list of pattern is specified
where each bit pattern is associated with an enum value.

Enums can also be mapped from coils and discrete inputs. A enum value is
associated when the bit is `true` and another value is associated when the bit
is `false`.

```yaml tab="single_bit"
enum-field-type: mapped
source-type: coil  # {none, coil, discrete_input, holding_register, input_register}
enum-mapping-type: single_bit  # {none, single_bit, single_register, multiple_register}
index: 10
when-true: DynamicTestKind_operating
when-false: DynamicTestKind_none
```

```yaml tab="single_register"
enum-field-type: mapped
source-type: holding_register  # {none, coil, discrete_input, holding_register, input_register}
enum-mapping-type: single_register  # {none, single_bit, single_register, multiple_register}
index: 10
mask: 0x0003  # mask the register. map masked values to enum values
mapping:
  - name: DynamicTestKind_none
    value: 0
  - name: DynamicTestKind_testing
    value: 1
  - name: DynamicTestKind_operating
    value: 2
  - name: DynamicTestKind_failed
    value: 3
```

```yaml tab="multiple_register"
enum-field-type: mapped
source-type: input_register  # {none, coil, discrete_input, holding_register, input_register}
enum-mapping-type: multiple_register  # {none, single_bit, single_register, multiple_register}
bits:
  - index: 10
    bit: 0
  - index: 10
    bit: 1
mapping:
  - pattern: "0000000000000001"
    value: DynamicTestKind_none
```

## Control profiles

Control profiles can be translated to Modbus write requests.

### Configuration

- `poll_period_ms`: specify the number of milliseconds between two polls
- `command-order`: ordered list of `command-id`. The first ID has the highest
  priority.
- `tolerance-ms`: number of milliseconds of tolerance for schedules.

### Boolean

For boolean fields, a `when-true` list of actions to perform when the boolean
value is `true` is specified. Likewise, a `when-false` list of actions to
perform when the boolean value is `false` is specified.

Each action requires a `command-id` for prioritization of the commands. The name
must fit with one the values in the `command-order` array.

Multiple `output-type` are available. The `write_single_coil` takes an index and
a boolean value and writes it to the coil. The `flip_single_coil` only takes an
index and performs a read followed by a write to flip the coil value.

```yaml tab="write_single_coil"
output-type: write_single_coil  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
index: 10
value: true
```

```yaml tab="flip_single_coil"
output-type: flip_single_coil  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
index: 11
```

The `write_single_register_*` ones take an index and a value, and write that
value to a single holding register. The `write_multiple_registers_*` takes
two indices and a value, and write that value into the two holding registers.
`lower_index` will contain the two LSB and `upper_index` will contain the two
MSB.

```yaml tab="write_single_register_uint16"
output-type: write_single_register_uint16  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
index: 12
value: 42
```

```yaml tab="write_single_register_int16"
output-type: write_single_register_int16  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
index: 13
value: 76
```

```yaml tab="write_multiple_registers_uint32"
output-type: write_multiple_registers_uint32  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
lower_index: 1000
upper_index: 1001
value: 42
```

```yaml tab="write_multiple_registers_int32"
output-type: write_multiple_registers_int32  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
lower_index: 1002
upper_index: 1003
value: 42
```

```yaml tab="write_multiple_registers_float32"
output-type: write_multiple_registers_float32  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
lower_index: 1004
upper_index: 1005
value: 42
```

The `read_and_modify_register` output type can be used to do masked operation on
the register value. It takes an extra `bitwise-operation` parameter that
describes the operation to perform, as well as a mask or a bit position.
Here are all the `bitwise-operation` supported:

```yaml tab="set_bit"
output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
bitwise-operation: set_bit  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
index: 10
bit: 0
```

```yaml tab="clear_bit"
output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
bitwise-operation: clear_bit  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
index: 10
bit: 0
```

```yaml tab="set_masked_bits"
output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
bitwise-operation: set_masked_bits  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
index: 10
mask: 0x0F
```

```yaml tab="clear_masked_bits"
output-type: read_and_modify_register # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
command-id: some-command-id
bitwise-operation: clear_masked_bits  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
index: 10
mask: 0x0F
```

Here is an example of a valid configuration:

```yaml
bool-field-type: mapped
when-true:
  - output-type: write_single_register_uint16  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
    command-id: some-command-id
    index: 10
    value: 42
when-false:
  - output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
    command-id: some-command-id
    bitwise-operation: set_masked_bits  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
    index: 11
    mask: 0x0F
```

### Int32, Int64 and Float

Int32, Int64 and Float values can be converted to values written to one or
multiple Modbus registers. When writing to multiple registers, `lower_index`
will contain the two LSB, and `upper_index` will contain the two MSB. Scaling
can be applied on all types.

The `write_multiple_registers_float32` writes the IEEE 754 floating-point
representation of the value to the register.

```yaml tab="write_single_register_uint16"
float-field-type: mapped
output-type: write_single_register_uint16  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
command-id: some-command-id
index: 10
scale: 1
```

```yaml tab="write_single_register_int16"
float-field-type: mapped
output-type: write_single_register_int16  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
command-id: some-command-id
index: 10
scale: 1
```

```yaml tab="write_multiple_registers_uint32"
float-field-type: mapped
output-type: write_multiple_registers_uint32  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
command-id: some-command-id
upper_index: 10
lower_index: 11
scale: 1
```

```yaml tab="write_multiple_registers_int32"
float-field-type: mapped
output-type: write_multiple_registers_int32  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
command-id: some-command-id
upper_index: 10
lower_index: 11
scale: 1
```

```yaml tab="write_multiple_registers_float32"
float-field-type: mapped
output-type: write_multiple_registers_float32  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
command-id: some-command-id
upper_index: 10
lower_index: 11
scale: 1
```

### Enum

For each enum variant, a list of actions are specified. The syntax and usage is
the exact same as the [Boolean](#boolean) values. Here is an example of a
valid configuration:

```yaml
enum-field-type: mapped
mapping:
  - name: StateKind_off
    outputs:
      - output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
        command-id: some-command-id
        bitwise-operation: read_and_modify_register  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
        index: 0
        mask: 0x0F
  - name: StateKind_on
    outputs:
      - output-type: read_and_modify_register  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
        command-id: some-command-id
        bitwise-operation: set_bit  # {set_bit, clear_bit, clear_masked_bits, set_masked_bits}
        index: 0
        bit: 2
  - name: StateKind_standby
    outputs:
      - output-type: write_multiple_registers_uint32  # {none, write_single_coil, flip_single_coil, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32, read_and_modify_register}
        command-id: some-command-id
        upper_index: 10
        lower_index: 11
        value: 42
```

### Schedule parameters

Each schedule parameter can be mapped to DNP3 Analog Output commands exactly
like [Int32, Int64 and Float](#int32-int64-and-float) fields. Schedules will
be executed as described in [Scheduling](../../misc/scheduling.md) page.

```yaml
- scheduleParameter:  # A sequence of schedule parameters w/ enum + value. Each plugin specifies what to do with each enumeration value
  - scheduleParameterType: ScheduleParameterKind_none
    output-type: write_single_register_int16  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
    command-id: some-command-id
    index: 10
    scale: 1
  - scheduleParameterType: ScheduleParameterKind_other
    output-type: write_single_register_int16  # {none, write_single_register_uint16, write_single_register_int16, write_multiple_registers_uint32, write_multiple_registers_int32, write_multiple_registers_float32}
    command-id: some-command-id
    index: 11
    scale: 1
```
