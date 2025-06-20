'use strict';
const HttpClient = require('../httpClient');

class Conferences {
    getConferences(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}conferences`, { params: params });
    }
}

module.exports = Conferences;