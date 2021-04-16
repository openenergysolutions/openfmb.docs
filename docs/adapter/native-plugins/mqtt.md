# MQTT

[MQTT](http://mqtt.org/) is a lightweight m2m pub/sub messaging protocol mainly
used for IoT communication.

The protocol uses a topic structure delimited by forward slahses `/`. OpenFMB
topics names conform to the pattern:

```
openfmb/<module name>/<profile name>/<subject name>
```

## Configuration

```yaml
mqtt:
  enabled: false
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  server-address: tcp://localhost:1883
  client-id: client1
  connect-retry-delay-ms: 5000
  security:
    security-type: none
  publish:  # to the MQTT broker
    - profile: SwitchReadingProfile
      topic-suffix: "*"  # * or an mRID
    - profile: SwitchStatusProfile
      topic-suffix: "*"  # * or an mRID
  subscribe:  # from the MQTT broker
    - profile: SwitchControlProfile
      topic-suffix: "*"  # * or an mRID
```

| Parameter              | Description                                                                              |
|------------------------|------------------------------------------------------------------------------------------|
| enabled                | `true` to enable MQTT plugin, `false` to disable.                                        |
| max-queued-messages    | Number of messages to keep in the publishing queue before discarding the oldest.         |
| server-address         | Connection address of the MQTT server. The protocol can be `tcp` or `ssl`.               |
| client-id              | Client ID. Must be **unique** per client and broker.                                     |
| connect-retry-delay-ms | Number of milliseconds to wait before trying to re-establish a connection to the server. |
| security               | See [Security](./#security).                                                             |
| publish                | List of profiles to publish to MQTT network (from the internal bus to MQTT)              |
| subscribe              | List of profiles to subscribe from the MQTT network (from MQTT to the internal bus)      |

For the `publish` and `subscribe` parameters, a list of profiles is specified.
You need to provide both the profile name (`profile`) and which equipment you
want to publish/subscribe to (`subject`). The subject name can either be `*` to
publish/subscribe to all the profiles, or a specific conducting equipment mRID.

## Security

The content of the `security` section depends on the `security-type` value.

``` yaml tab="none"
security:
  security-type: none
```

``` yaml tab="tls_server_auth"
security:
  security-type: tls_server_auth
  ca-trusted-cert-file: server_cert.pem
  username: "username"
  password: "password"
```

``` yaml tab="tls_mutual_auth"
security:
  security-type: tls_mutual_auth
  ca-trusted-cert-file: server_cert.pem
  client-private-key-file: client_key.pem
  client-cert-chain-file: client_cert.pem
```

If no security is needed, the `security-type` can be set to `none`.

To learn how to produce self-signed certificates with OpenSSL, check
[Self-signed certificates](../misc/self-signed.md).

### Server authentication + user/password

The server must run with a TLS certificate, a username and a password. In the
`mosquitto.conf`, add the following lines:

```
cafile ~/certs/client_cert.pem
certfile ~/certs/server_cert.pem
keyfile ~/certs/server_key.pem
password_file /etc/mosquitto/passwd
allow_anonymous false
```

And generate the `passwd` file:

```bash
> sudo mosquitto_passwd -c /etc/mosquitto/passwd username
```

Finally, configure the adapter to establish a TLS encrypted session, accepting
only the certificate. The username and the password are embedded in the
connection URL.

```yaml
mqtt:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  server-address: ssl://localhost:1883
  client-id: client1
  connect-retry-delay-ms: 5000
  security:
    security-type: tls_server_auth
    ca-trusted-cert-file: server_cert.pem
    username: "username"
    password: "password"
  # ...
```

### Mutual authentication

The server must run with a TLS certificate and must validate the client
certificate. In the `mosquitto.conf`, add the following lines:

```
cafile ~/certs/client_cert.pem
certfile ~/certs/server_cert.pem
keyfile ~/certs/server_key.pem
require_certificate true
#password_file /etc/mosquitto/passwd
#allow_anonymous false
```

If you want to require username/password in addition to mutual authentication,
de-comment the last two lines.

And configure the adapter to establish a TLS encrypted session with mutual
authentication.

```yaml
mqtt:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  server-address: ssl://localhost:1883
  client-id: client1
  connect-retry-delay-ms: 5000
  security:
    security-type: tls_mutual_auth
    ca-trusted-cert-file: server_cert.pem
    client-private-key-file: client_key.pem
    client-cert-chain-file: client_cert.pem
    #username: "username"
    #password: "password"
  # ...
```

If a username/password is required, then uncomment the last two lines.
