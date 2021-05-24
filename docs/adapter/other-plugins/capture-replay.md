# Capture and Replay Plugins

The `capture` plugin saves all the messages sent to the internal message bus to a
file along with the timestamp that they were sent. The `replay` plugin reads
this file and publishes the exact same messages to the internal message bus at
the time they were originally sent. It is useful for debugging purposes for
replaying real data.

Usually, the `capture` and the `replay` plugins are mutually exclusive.

## Configuration

The `capture` plugin takes a single setting: the path of the file to save to.

```yaml
capture:
  enabled: true
  file: capture.txt
```

The `replay` plugin takes a single setting: the path of the file to read from.

```yaml
replay:
  enabled: true
  file: capture.txt
```
