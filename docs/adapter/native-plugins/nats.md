---
sidebar_position: 1
---

# NATS

[NATS](https://nats.io/) is a lightweight messaging protocol that can used can
be used to publish/suscribe OpenFMB profiles to/from a NATS server.

NATS uses the a topic hierarchy delimited by periods. Within the context of
OpenFMB, the topic name takes the follwing form:

`openfmb.<module name>.<profile name>.<subject name>`

The `<subject name>` may be a the `*` wildcard or the ConductingEquipment
`mRID`. All messages published to the NATS server will use the fully qualified
topic name including the mRID.

## Configuration

```yaml
nats:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  connect-url: nats://localhost:4222
  connect-retry-seconds: 5
  security:
    security-type: none
  publish:  # to the NATs broker
    - profile: SwitchReadingProfile
      subject: "*"  # * or an mRID
    - profile: SwitchStatusProfile
      subject: "87c73d56-b9ab-4a5c-8cd6-cf603490e3e4"  # * or an mRID
  subscribe:  # from the NATs broker
    - profile: SwitchControlProfile
      subject: "*"  # * or an mRID
```

| Parameter             | Description                                                                         |
|-----------------------|-------------------------------------------------------------------------------------|
| enabled               | `true` to enable NATS plugin, `false` to disable.                                   |
| max-queued-messages   | Number of messages to keep in the publishing queue before discarding the oldest.    |
| connect-url           | Connection address of the NATS server. The protocol can be `nats` or `tls`.         |
| connect-retry-seconds | Number of seconds to wait before trying to re-establish a connection to the server. |
| security              | See [Security](#security).                                                        |
| publish               | List of profiles to publish to NATS server (from the internal bus to NATS)          |
| subscribe             | List of profiles to subscribe from the NATS server (from NATS to the internal bus)  |

The `publish` and `subscribe` section specify lists of profiles. The profile
name (`profile`) and which equipment you want to publish/subscribe to
(`subject`). The subject name can either be `*` to publish/subscribe to all the
profiles, or a specific ConductingEquipment mRID.

## Security

The connection to a NATS server may optionally be secured using TLS.

The required contents of the `security` section depends on the value of
`security-type`.

``` yaml tab="none"
security:
  security-type: none
```

``` yaml tab="tls_server_auth"
security:
  security-type: tls_server_auth
  ca-trusted-cert-file: server_cert.pem
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

In this mode, the client authenticates the server using a certificate, and then
the server authenticates the client using a user name and password sent over the
encrypted TLS channel.

Authorization for each user can be specified in the config file of the NATS
server. See [this page](https://docs.nats.io/nats-server/configuration/securing_nats/authorization)
for more details.

The server must run with a TLS certificate, a username and a password in this
mode:

```bash
> nats-server --tls --tlscert ~/certs/server_cert.pem --tlskey ~/certs/server_key.pem --user username --pass password
```

The adapter is configured to authenticate the server using a trusted root
certificate or self-signed certificate of the broker. The username and the
password are embedded in the connection URL.

```yaml
nats:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  connect-url: nats://username:password@localhost:4222
  connect-retry-seconds: 5
  security:
    security-type: tls_server_auth
    ca-trusted-cert-file: server_cert.pem
  # ...
```

### TLS mutual authentication

In this mode, the client and the server mutually authenticate one another using
certificates.

The server must run with a TLS certificate and must validate the client
certificate.

```bash
nats-server --tlsverify --tlscert ~/certs/server_cert.pem --tlskey ~/certs/server_key.pem --tlscacert ~/certs/client_cert.pem
```

The adapter is configured to perform mutual authentication and provided with the
paths to the server cert, the client's private key, and a certificate chain file
that, at a minimum, contains the client's self-signed certificate.

```yaml
nats:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  connect-url: nats://localhost:4222
  connect-retry-seconds: 5
  security:
    security-type: tls_mutual_auth
    ca-trusted-cert-file: server_cert.pem
    client-private-key-file: client_key.pem
    client-cert-chain-file: client_cert.pem
  # ...
```

:::note
The username/password is not required when using TLS mutual authentication to be secure, but the two modes are also not mutually exclusive. You can do server-only authentication without any credentials (client not authenticated) and you can require username/password server-side even with TLS mutual authentication.
:::

### JWTs

A NATS client can prove its permission to the server by providing a JSON Web
Token (JWT). It is possible to specify the token with the `jwt-creds-file`
parameter. This feature can be used alone, with server-only authentication, or
with mutual authentication.

:::note
Using JWT only ensures that the client has permissions attested to with the token. It does not protect the communications from tampering or inspection in the same way that TLS does.
:::

```yaml
nats:
  enabled: true
  max-queued-messages: 100  # how many messages to buffer before discarding the oldest
  connect-url: nats://localhost:4222
  connect-retry-seconds: 5
  security:
    security-type: none
    jwt-creds-file: C:/Users/johndoe/.nkeys/OperatorName/accounts/AccountName/users/UserName.creds
```

The NATS server must be configured to authenticate the JWT with the appropriate
key and know all the accounts that exist.

#### Static accounts configuration

To statically list all the accounts, run the following:

```bash
nsc generate config --mem-resolver --config-file auth.conf --operator-jwt operator.jwt
```

It will generate a `auth.conf` similar to this:

```
operator: "D:\\Desktop\\openfmb_deps\\operator.jwt"
resolver: MEMORY
resolver_preload: {
  ABN6Q3CJCJD6IV3WYASVHK4WGEHO6GNKLK5SRVFBXZL2XQB6UXLFIATQ: eyJ0eXAiOiJqd3QiLCJhbGciOiJlZDI1NTE5In0.eyJqdGkiOiJPTVZBVlpUTUZOSEtGU0lIQVhDTUFRWVZYVjNXUE5NUjdMVkVJV1FIQVlKMktHVVdUQ0pBIiwiaWF0IjoxNTY1ODc1NzM4LCJpc3MiOiJPQk1WU0VYNFZST1ZOUjNKSFlFWU1BRjNNWDdFN1dKSkROUVFCTU1WRDI1MlJNWkc2SzVLMkhWWCIsIm5hbWUiOiJUZXN0QWNjb3VudCIsInN1YiI6IkFCTjZRM0NKQ0pENklWM1dZQVNWSEs0V0dFSE82R05LTEs1U1JWRkJYWkwyWFFCNlVYTEZJQVRRIiwidHlwZSI6ImFjY291bnQiLCJuYXRzIjp7ImxpbWl0cyI6eyJzdWJzIjotMSwiY29ubiI6LTEsImxlYWYiOi0xLCJpbXBvcnRzIjotMSwiZXhwb3J0cyI6LTEsImRhdGEiOi0xLCJwYXlsb2FkIjotMSwid2lsZGNhcmRzIjp0cnVlfX19.POiZG4gp0EOy0mjF6MhHG1stGyR7iR6DQVYP2v3h2ZE1Hr1hM2CVcHC0g2fE572jNXIrUyLLIw0_8hUXJvQNCQ
}
```

Simply include it in the NATS main config file:

```
include ./auth.conf
```

#### Using an external account resolver

A ready-to-use HTTP account resolver is available here:
(https://github.com/nats-io/nats-account-server)

In the NATS config file, add the following lines:

```
operator: C:\\Users\\johndoe\\.nkeys\\OperatorName\\OperatorName.jwt
resolver: URL(http://localhost:9090/jwt/v1/accounts/)
```
