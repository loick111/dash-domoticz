#!/usr/bin/env node

let log = require('./logger')();
let config = require('konfig')();
let DashButton = require('dash-button');
let domoticz = require('domoticz-api/api/domoticz')(config.domoticz);

// register all buttons
for (let i in config.button) {
    let button = config.button[i];

    // create dash button
    button.dash = new DashButton(button.addr);

    // domoticz toggle
    button.dash.addListener(() => {
        log.info(button.name + ' pushed.');
        for (let j in button.toggle) {
            let idx = button.toggle[j];

            log.info('Toggle ' + button.name);
            domoticz.changeSwitchState({idx: idx, type: 'switch', state: 'toggle'}, (err, res) => {
                if (err) log.error(res);
                log.info('Domoticz ' + idx + ' ' + res.status);
            });
        }
    });

    log.info(button.name + ' added.');
}

log.info('Listening...');