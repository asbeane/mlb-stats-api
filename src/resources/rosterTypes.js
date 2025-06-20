'use strict';
const HttpClient = require('../httpClient');

class RosterTypes {
    getRosterTypes(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}rosterTypes`, { params: params });
    }
}

module.exports = RosterTypes;