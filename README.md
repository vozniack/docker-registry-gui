# Docker Registry GUI
Graphical user interface for docker registry

## Proxy config
Make sure if your `proxy.conf.json` contains correct address of registry.

```json
{
  "/v2/*": {
    "target": "http://localhost:5000",
    "secure": false
  }
}
```
