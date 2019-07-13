'use strict';
const resources = require('./src/resources');
const axios = require('axios');

class MLBStatsAPI {
    constructor(host = 'https://statsapi.mlb.com/api/', version = 'v1' ) {
        this.host = host;
        this.version = version
        this.apiHost = host + version + '/';
        this.request = axios;

        /* All functions assume first argument are the query parameters named params, and the second argument is an object containing
         * named path parameters, pathParams (ie {pathParams: {teamId: 111, leagueId: 103}})
        */
        for (const resource in resources) {
            for (const func of Object.getOwnPropertyNames(resources[resource].prototype)) {
                if (func !== 'constructor') {
                    this[func] = resources[resource].prototype[func].bind(this);
                }
            }
        }
    }
}

module.exports = MLBStatsAPI;