---
sidebar_position: 4
---

# Run the HMI

To run the OpenFMB HMI Docker image, we need to pass in two environment variables:

1. `APP_CONF`: Path to application configuration file (in our case, it is the `app.toml` in previous section)

2. `APP_DIR_NAME`: Application directory where docker mounted volumn is specified (`-v` option in `docker run` command).  This directory is where all single-line diagrams that you create later in this tutorial shall be stored.

Suppose that you've created the `app.toml` file in `/home/joe/hmi` directory, and you want to mount and point `APP_DIR_NAME` to it, run the following command:

```bash
> docker run -d -p 32771:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi
```

**A few things to note:**

1. The OpenFMB HMI docker container exposes port `32771`.  In this example, the `docker run` command above maps host port 32771 to container port 32771 (flag `-p 32771:32771`).  You can map any available port on your host system to the exposed port 32771.  For example, if you want to map port `80` on your host system to `32771`, replace `-p 32771:32771` with  `p 80:32771`, and command shall be:

```bash
> docker run -d -p 80:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi
```

2. The `-v` or `volumn` option specifies where the local directory is mounted.

3. The first `-e` flag is the `APP_CONF` environment variable in the form of `APP_CONF=/name_of_mounted_volumn/path/to/the/config_file` (in our case, it is `APP_CONF=/server/app.toml`).

4. The second `-e` flag is the `APP_DIR_NAME` environment variable in the form of `APP_DIR_NAME=/name_of_mounted_volumn` (in our case, it is `APP_DIR_NAME=/server`).

```
TIP: Our named volumn is `/server`, therefore, "name_of_mounted_volumn" is replaced with "server".  
     You can name it anything you want.
```

5. Launch your favorite browser, and navigate to `http://127.0.0.1:32771`.

6. The default username/pwd is `admin/hm1admin`.

**Congratulations!** You now have run your first OpenFMB HMI application.

