---
sidebar_position: 3
---

# Setting up the HMI

To setup the HMI, follow the following steps:

1. The first thing to do is to create an application configuration file.  For this tutorial, we name the file `app.toml`.  From your working directory, run the following command:

```bash
> touch app.toml
```

2. Use your favorite text editor program, open `app.toml` and paste in the following configuration:

```
[coordinator]
environment = "prod"          # Either "prod" or "dev"
app_name = "OpenFMB HMI"      # The name of the application

[openfmb_nats_subscriber]
prod_uri = "10.0.0.1:4222"    # NATS broker connection URL.  IF environment = "prod", this URL shall be used
dev_uri = "192.168.86.1:4222" # NATS broker connection URL.  IF environment = "dev", this URL shall be used

```

3. Change the NATS connection URL according to your environment.

