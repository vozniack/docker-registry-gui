# Docker Registry GUI
Graphical user interface for docker registry


## Proxy config
Make sure if your docker registry runs on `localhost:5000`

```json
{
  "/v2/*": {
    "target": "http://localhost:5000",
    "secure": false
  }
}
```
