'use strict';

class Sports {
    getSports(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}sports`, { params: params });
    }

    getSportsPlayers(args = { pathParams: '' }) {
        const { params, pathParams: { sportId = '' } } = args;
        return this.request.get(`${this.apiHost}sports/${sportId}/players`, { params: params });
    }
}

module.exports = Sports;