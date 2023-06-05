# Self-signed certificates

## Client Certificate

```bash
openssl req -x509 -newkey rsa:4096 -nodes -keyout client_key.pem -out client_cert.pem -days 365 -subj "/C=US/ST=California/L=Bend/O=OES Name/OU=Org/CN=localhost"
```

## Server Certificate

```bash
openssl req -x509 -newkey rsa:4096 -nodes -keyout server_key.pem -out server_cert.pem -days 365 -subj "/C=US/ST=California/L=Bend/O=OES Name/OU=Org/CN=localhost"
```
