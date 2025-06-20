'use strict';
const HttpClient = require('../httpClient');

class GameTypes {
    getGameTypes(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}gameTypes`, { params: params });
    }
}

module.exports = GameTypes;