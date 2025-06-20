'use strict';
const HttpClient = require('../httpClient');

class Divisions {
    getDivisions(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}divisions`, { params: params });
    }
}

module.exports = Divisions;