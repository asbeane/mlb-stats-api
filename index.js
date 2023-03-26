'use strict';
const resources = require('./src/resources');

class MLBStatsAPI {
    constructor(host = 'https://statsapi.mlb.com/api/') {
        this.host = host;
        this.apiHost = host + 'v1/';

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