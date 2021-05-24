# DNP3 Outstation

The `dnp3-outstation` plugin exposes OpenFMB measurements as a DNP3 outstation
for non-control OpenFMB profiles. It also maps DNP3 commands to OpenFMB control
messages.

## General Configuration

- `name`: Name used in the logs to identify the communication session.
- `channel`
    - `listen-adapter`: Network adapter to use to establish a TCP connection (typically 0.0.0.0)
    - `port`: TCP port on which the outstation will be listening
- `protocol`
    - `master-address`: DNP3 link-layer address of the master (the remote device)
    - `outstation-address`: DNP3 link-layer address of the outstation (the
      adapter)
    - `enable-unsolicited`: support for DNP3 unsolicited responses
    - `confirm-timeout-ms`: DNP3 confirmation timeout (in milliseconds)
    - `default-static-variations`: default static variations
        - `binary-input`: possible values:
            - `Group1Var1` (packed)
            - `Group1Var2` (with flags)
        - `analog-input`: possible values:
            - `Group30Var1` (32-bit with flags)
            - `Group30Var2` (16-bit with flags)
            - `Group30Var3` (32-bit without flags)
            - `Group30Var4` (16-bit without flags)
            - `Group30Var5` (32-bit float with flags)
            - `Group30Var6` (64-bit double with flags)
        - `counter`: possible values:
            - `Group20Var1` (32-bit with flags)
            - `Group20Var2` (16-bit with flags)
            - `Group20Var5` (32-bit without flags)
            - `Group20Var6` (16-bit without flags)
    - `default-event-variations`: default event variations
        - `binary-input`:
            - `Group2Var1` (without time)
            - `Group2Var2` (with absolute time)
            - `Group2Var3` (with relative time)
        - `analog-input`:
            - `Group32Var1` (32-bit without time)
            - `Group32Var2` (16-bit without time)
            - `Group32Var3` (32-bit with time)
            - `Group32Var4` (16-bit with time)
            - `Group32Var5` (32-bit float without time)
            - `Group32Var6` (64-bit double without time)
            - `Group32Var7` (32-bit float with time)
            - `Group32Var8` (64-bit double with time)
        - `counter`:
            - `Group22Var1` (32-bit with flags)
            - `Group22Var2` (16-bit with flags)
            - `Group22Var5` (32-bit with flags and time)
            - `Group22Var6` (16-bit with flags and time)

## Non-control Profiles

Non-control profiles (reading, status, etc) are mapped to DNP3 measurement
points. When the message is received on the internal message bus, it updates the
internal DNP3 database and masters polling the outstation will read the updated
points.

### Boolean

OpenFMB Boolean values can be mapped to DNP3 binary inputs. If `negate` is set
to `true`, the OpenFMB value is negated before updating the DNP3 outstation.

```yaml
bool-field-type: mapped
destination-type: binary  # {none, binary}
index: 10
negate: false
```

### Int32 and Int64

OpenFMB `int32` and `int64` values can be mapped to a DNP3 analog input or a
DNP3 counter. A scaling value can also be specified.

```yaml tab="analog"
int32-field-type: mapped
destination-type: analog  # {none, analog, counter}
index: 10
scale: 1000
```

```yaml tab="counter"
int32-field-type: mapped
destination-type: counter  # {none, analog, counter}
index: 10
scale: 1000
```

### Float

OpenFMB `float` values can be mapped to a DNP3 analog input. A scaling can be
applied to the value.

```yaml
float-field-type: mapped
destination-type: analog  # {none, analog}
index: 10
scale: 1000
```

### Enum

OpenFMB enumerations can be mapped to DNP3 binary or analog points.

A list of each enum variant is specified with the desired boolean or integer
value.

If the received OpenFMB enumeration variant is not mapped to any value, the
point is reported as offline to indicate a misconfiguration.


```yaml tab="binary"
enum-field-type: mapped
destination-type: binary  # {none, binary, analog}
index: 10
mapping:
  - DynamicTestKind_none: false
  - DynamicTestKind_testing: true
  - DynamicTestKind_operating: false
  - DynamicTestKind_failed: true
```

```yaml tab="analog"
enum-field-type: mapped
destination-type: analog  # {none, binary, analog}
index: 10
mapping:
  - DynamicTestKind_none: 0
  - DynamicTestKind_testing: 1
  - DynamicTestKind_operating: 2
  - DynamicTestKind_failed: 3
```

## Control Profiles

DNP3 commands can be translated to OpenFMB control profile messages.

There are three actions that can be specified for each point:

- `update`: simply updates the current profile
- `clean_and_update`: clears the current message and updates the value
- `publish`: updates the current message and sends it to the message bus

### Boolean

Boolean values in control profiles can be mapped from DNP3 CROBs. A list of
control codes is specified with the Boolean value it should be associated to.

The control codes are the following:

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

```yaml
bool-field-type: mapped
command-source-type: crob  # {none, crob}
profile-action: update  # {update, clear_and_update, update_and_publish}
index: 0
mapping:
- control_code: LATCH_ON
    value: true
- control_code: LATCH_OFF
    value: false
```

### Int32, Int64, and Float

Integer and floating point values can be mapped from Analog Output commands, with
optional scaling.

```yaml
float-field-type: mapped
command-source-type: analog_output  # {none, analog_output}
profile-action: clear_and_update  # {update, clear_and_update, update_and_publish}
index: 10
scale: 1
```

### Enum

DNP3 Analog Output commands can be mapped to OpenFMB enums. A list of
enumeration variants is provided with the source Analog Output value. If no
match is found at runtime, the outstation will return `NOT_SUPPORTED`.

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

### Schedule Parameters

Schedule parameters are not currently supported.
