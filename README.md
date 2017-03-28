# Dash Domoticz

This tool allows switching switches on Domoticz with Amazon Dash buttons.

You can buy them here : [Amazon Dash Buttons](https://www.amazon.com/Dash-Buttons/b?ie=UTF8&node=10667898011)

## How to use it ?

### Scan available Amazon Dash Buttons
```sh
$ docker run -it --net=host loick111/dash-domoticz npm run scan
```

### Configuration
The configuration is composed of two files, one for connecting to the Domoticz server and the other for configuring the Amazon Dash Buttons.

```yaml
# domoticz.yml
default:
  host: localhost
  port: 8080          
  protocol: http      # http or https
  username: domoticz
  password: domoticz
```
```yaml
# button.yml
default:
  lights:
    name: TV Lights
    addr: xx:xx:xx:xx:xx:xx   # Amazon Dash Button Mac Address
    toggle: [1, 2, 3]         # array of domoticz idx
```

### Retrieve all devices in Domoticz
To retrieve the identifiers of your switches on Domoticz, make this request on your Domoticz server.
[http://domoticz/json.htm?type=command&param=getlightswitches](http://domoticz/json.htm?type=command&param=getlightswitches)

### Docker
__Also available for Raspberry with tag `loick111/dash-domoticz:rpi`__
```yaml
version: '2'
services:
  app:
    image: loick111/dash-domoticz
    network_mode: host
    # To customize and persist configuration
    volumes:
      - /path/to/config:/app/config
```