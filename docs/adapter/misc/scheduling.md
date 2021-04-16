# Scheduling

Control profiles have schedule points that needs to be executed in the future
following a specific timeline.

## Basic rules

- All schedule points **must** have a timestamp **and** a value.
- The first schedule point **must** be within a tolerance of the current time.
- All points **must** be in increasing order.

If a control profile is received and does not follow these rules, the whole
message is dropped and a warning is printed in the console.

If a control profile does not contain any scheduled points, than it is executed
as is and no schedule is started.

## Execution procedures

All the points that are scheduled in the past (before `now`) and inside the
tolerance are executed together in a message with the original timestamp and
with all the non-scheduled values.

Then, each point will be executed at the provided timestamp. If points share
the same timestamp, they will be executed together.

If another valid scheduled control profile is received while a schedule is
already in progress, it will be started in parallel with the first schedule.