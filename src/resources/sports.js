'use strict';
const HttpClient = require('../httpClient');

class Sports {
    getSports(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}sports`, { params: params });
    }

    getSportsPlayers(args = { pathParams: '' }) {
        const { params, pathParams: { sportId = '' } } = args;
        return HttpClient.request(`${this.apiHost}sports/${sportId}/players`, { params: params });
    }
}

module.exports = Sports;