---
sidebar_position: 3
---

# Setting up the HMI

To setup the HMI, do the following:

1. First create an application configuration file.  For this tutorial, we name the file `app.toml`.  From your working directory, create a file named `app.toml`

2. Use your favorite text editor program, open `app.toml` and paste in the following configuration:

```
[hmi]
app_name = "OpenFMB HMI"        # name of the application
environment = "dev"             # dev or prod refering to nats.dev_uri or nats.prod_uri accordingly
log-level = "Debug"             # Off, Error, Info, Debug, Trace
# server_host = "0.0.0.0"       # For docker run, this should be "0.0.0.0", for local debugging, 
                                # this needs to match the host computer's ip address
# server_port = 80              # default is 443 for https and 80 for http
# comment out these two ssl related items if TLS is needed
# ssl_cert = "/server/certs/server/server-cert.pem"
# ssl_key = "/server/certs/server/server-key.pem"

[nats]
prod_uri = "10.0.0.1:4222"      # NATS broker connection URL.  IF environment = "prod", this URL shall be used
dev_uri = "192.168.86.1:4222"   # NATS broker connection URL.  IF environment = "dev", this URL shall be used
# authentication_type = "creds" # comment out to enable NATS credential authentication type
# creds = "meter.creds"         # comment out to specify NATS credentials file
```

3. There is a quick switch between `prod` and `dev` environment.  Specify `prod_uri` or `dev_uri` according to what is set for `environment`
4. If `hmi.environment` is set to `prod`, update the `nats.prod_uri` to the NATS connection URL that you want to connect to. Otherwise, update the `nats.dev_uri`.
5. `sever_host` should be set to `0.0.0.0` to bind to all network interfaces.  If you want to bind to a specific network interface, set `server-host` to the IP address associated with that interface.


