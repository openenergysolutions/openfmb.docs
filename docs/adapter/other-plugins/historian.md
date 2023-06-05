# Historian Plugin

The `historian` plug-in enables the user to write data to [timescale database](https://www.timescale.com/) and query data later on for analysis purposes.

## Setup Database

TimescaleDB is a time-series SQL database that is used as the data storage for the `historian` plug-in of the OpenFMB Adapter.  To setup the database, assuming that you want to store data on `~/local-path-to-store-data` folder of your computer, do:

```bash
docker run -d \
  --name timescaledb \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -v ~/local-path-to-store-data:/var/lib/postgresql/data \
  timescale/timescaledb:latest-pg12-oss
```

The above Docker run command shall stand up an instance of TimescaleDB container name `timescaledb`, listening on port `5432`, and storing data to `~/local-path-to-store-data`.  

## Database Schema
To initialize the database with the plug-in schema, download `timescaledb.sql` from this link:

[timescaledb.sql](/timescaledb.sql)

- Navigate to where the file is downloaded and copy the file to the `timescaledb` container:
  ```
  docker cp timescaledb.sql timescaledb:/var/lib/postgresql/
  ```

- Shell into the container and run the script:
  ```
  docker exec -it -u postgres  timescaledb  ash
  ```
  
  Inside the containter, run the `timescaledb.sql` script:
  ```
  cd /var/lib/postgresql/
  psql -U postgres -d openfmb -a -f timescaledb.sql
  ```

## Adapter Configuration

In the `timescaledb` section of the OpenFMB Adapter main configuration file, update according to your need:

- `enabled`: when set to `true`, the `timescaledb` plugin is enabled
- `database-url`: database connection URL (PostgreSQL connection string)
- `store-measurement`: when set to `true`, basic measurement such as Voltage, Current, Wattage... are stored.  Data extracted from *ReadingProfile
- `table-name`: the name of the data or measurement table.  Default is `data`
- `store-raw-message`: when set to `true`, raw OpenFMB messages are stored in either JSON or Protobuf format
- `raw-table-name`: the name of the raw OpenFMB  table.  Default is `raw_table`
- `raw-data-format`: format of the OpenFMB stored in the database. 0 is JSON, 1 is Protobuf.  Default is 0 (JSON)
- `max-queued-messages`: max queued messages to be buffered before discarding the oldest messages
- `connect-retry-seconds`: time (in seconds) to wait between two connection attempts
- `data-store-interval-seconds`: how frequent to store.  `0` means store everything

Here's an example of a configuration:

```yaml
timescaledb:
    enabled: true
    database-url: postgresql://postgres:password@localhost:5432/openfmb
    store-measurement: true
    table-name: data
    store-raw-message: false
    raw-table-name: raw_data
    raw-data-format: 0
    max-queued-messages: 100
    connect-retry-seconds: 5
    data-store-interval-seconds: 0
```

Next, specify the type of OpenFMB messages you wish to store by subscribing to either NATS or MQTT.  Here is an example of full `adapter.yaml` configuration:

```yaml
file:
  id: openfmb-adapter-main
  edition: 2.1
  version: 2.1.0.0
  plugin: ''
logging:
  logger-name: application
  console:
    enabled: false
  rotating-file:
    enabled: true
    path: adapter.log
    max-size: 1048576
    max-files: 3
plugins:
  nats:
    enabled: true
    max-queued-messages: 100
    connect-url: nats://127.0.0.1:4222
    connect-retry-seconds: 5
    security:
      security-type: none
      jwt-creds-file: ''
    publish: []
    subscribe:
    - profile: SwitchReadingProfile
      subject: '*'
    - profile: SwitchStatusProfile
      subject: '*'
    - profile: SolarReadingProfile
      subject: '*'
    - profile: SolarStatusProfile
      subject: '*'
    # More profiles to store as needed...  
  timescaledb:
    enabled: true
    database-url: postgresql://postgres:password@localhost:5432/openfmb
    store-measurement: true
    table-name: data
    store-raw-message: true
    raw-table-name: raw_data
    raw-data-format: 0
    max-queued-messages: 100
    connect-retry-seconds: 5
    data-store-interval-seconds: 0
```
 
