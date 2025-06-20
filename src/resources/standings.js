'use strict';
const HttpClient = require('../httpClient');

class Standings {
    getStandings(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}standings`, { params: params });
    }
}

module.exports = Standings;