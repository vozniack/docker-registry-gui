# Docker Registry GUI
Graphical user interface for docker registry. Allows you to see and delete repositories, tags and manifests.

## Deployment
* Build Docker Registry GUI application: `ng build --configuration=production`
* Build docker image: `docker build -t docker-registry-gui:0.9 .`
* Run by:
  * compose: `docker compose up -p docker-registry -d`
  * image: `docker run --name docker-registry-gui -p 4200:80 -d -i docker-registry-gui:0.9`

**Disclaimer** - default nginx configuration is prepared for docker compose. If you want just to run an image, make sure if you built app with correct configuration.
In addition, compose also comes with the docker registry itself, so if you want to run an application quickly, use docker compose option.

## Nginx config
To run as docker image, make sure that the `nginx.conf` configuration contains the correct registry address.

```text
location /v2/ {
  proxy_pass http://docker-registry:5000;
}
``` 
 
## Proxy config
For local purposes make sure if your `proxy.conf.json` contains correct address of registry.

```text
{
  "/v2/*": {
    "target": "http://localhost:5000",
    "secure": false
  }
}
```
