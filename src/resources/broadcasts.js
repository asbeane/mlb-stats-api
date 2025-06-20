'use strict';
const HttpClient = require('../httpClient');

class Broadcasts {
    getBroadcasts(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule/broadcasts`, { params: params });
    }
}

module.exports = Broadcasts;