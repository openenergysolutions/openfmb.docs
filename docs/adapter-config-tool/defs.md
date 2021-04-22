---
sidebar_position: 6
---

# Terminology and Definitions

 

| **Term**                                     | **Description**                                              |
| -------------------------------------------- | :----------------------------------------------------------- |
| Adapter Configuration file                   | Main adapter  configuration YAML file                        |
| Template file                                | Profile  mapping files for specific device speaking a specific legacy protocol. A session file can also be used as template  file |
| command-id                                   | Name  associate with a command in OpenFMB control profile. For example, a command-id for a trip  command can be “my-trip-command”. With  the command-order settings, command-id can be used to set the priority of  which command should execute first |
| command-order                                | Order of  commands by operation id. First == highest priority, last == lower priority |
| Poll Policy                                  | Applicable  for **DNP3 master only.** It is defining how DNP3 master will poll an  outstation device. Event, reading, and  status profiles required reference to “poll-name” that defined in poll policy  settings |
| Heartbeat                                    | Applicable  for **MODBUS master only**.   Currently, heartbeat is configured to read a holding register, flip  the masked bit, and write it back |
| DNP3 Specific Settings:  source-type         | none,  binary,  analog,  counter     when a field  type (enum-field-type, bool-field-type, etc) is specified as “mapped”, but  source-type is specified as “none”, the whole field type settings will be  ignored |
| DNP3 Specific Settings:  Group and variation | g12v1 = group  12 variation 1;  g41v1 = group  41 variation 1;  g41v2 = group  41 variation 2;  g41v3 = group  41 variation 3;  g41v4 = group  41 variation 4; |
| DNP3 Specific Settings:  CROB operation type | NUL,  LATCH_OFF,  LATCH_ON,  PULSE_OFF,  PULSE_ON            |
| DNP3 Specific Settings:  Trip Close Code     | NUL,  TRIP,  CLOSE                                           |
| MODBUS Specific Settings:  source-type       | none,  coil,  discrete_input,  input_register,  holding_register     when a field  type (enum-field-type, bool-field-type, etc) is specified as “mapped”, but  source-type is specified as “none”, the whole field type settings will be  ignored |
| MODBUS Specific Settings:  mask              | Data type of  a mask is now **INTEGER.** In  previous version, mask was HEX string |