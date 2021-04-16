# Self-signed certificates

## Client certificate

```bash
openssl req -x509 -newkey rsa:4096 -nodes -keyout client_key.pem -out client_cert.pem -days 365 -subj "/C=US/ST=Oregon/L=Bend/O=Automatak Name/OU=Org/CN=localhost"
```

## Server certificate

```bash
openssl req -x509 -newkey rsa:4096 -nodes -keyout server_key.pem -out server_cert.pem -days 365 -subj "/C=US/ST=Oregon/L=Bend/O=Automatak Name/OU=Org/CN=localhost"
```
