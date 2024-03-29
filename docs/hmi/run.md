---
sidebar_position: 4
---

# Run the HMI

To run the OpenFMB HMI Docker image, we need to pass in two environment variables:

1. `APP_CONF`: Path to application configuration file (in our case, it is the `app.toml` in previous section)

2. `APP_DIR_NAME`: Application directory where Docker mounted volume is specified (`-v` option in `docker run` command).  This directory is where all single-line diagrams that you create later in this tutorial will be stored.

Suppose that you created the `app.toml` file in `/home/joe/oes` directory, and you want to mount and point `APP_DIR_NAME` to it. Run the following command:

```bash
> docker run -d -p 80:80 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server oesinc/openfmb.hmi
```

**A few things to note:**

1. The OpenFMB HMI docker container exposes port `80`.  In this example, the `docker run` command above maps host port 80 to container port 80 (flag `-p 80:80`).  You can map any available port on your host system to the exposed port 32771.  For example, if you want to map port `8080` on your host system to `80`, specify `-p 8080:80`, and the command will be:

```bash
> docker run -d -p 8080:80 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server oesinc/openfmb.hmi
```

2. The `-v` or `volume` option specifies where the local directory is mounted.

3. The first `-e` flag is the `APP_CONF` environment variable in the form of `APP_CONF=/name_of_mounted_volume/path/to/the/config_file` (in our case, it is `APP_CONF=/server/app.toml`).

4. The second `-e` flag is the `APP_DIR_NAME` environment variable in the form of `APP_DIR_NAME=/name_of_mounted_volume` (in our case, it is `APP_DIR_NAME=/server`).

:::tip
Our named volume is `/server`, therefore, "name_of_mounted_volume" is replaced with "server".  
     You can name it anything you want.
:::

5. Launch your favorite browser, and navigate to `http://127.0.0.1`.

6. The default username/pwd is `admin/hm1admin`.

**Congratulations!** You have run your first OpenFMB HMI application.

