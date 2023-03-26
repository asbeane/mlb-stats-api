'use strict';

class Sports {
    getSports(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}sports`, { params: params });
    }

    getSportsPlayers(args = { pathParams: '' }) {
        const { params, pathParams: { sportId = '' } } = args;
        return fetch(`${this.apiHost}sports/${sportId}/players`, { params: params });
    }
}

module.exports = Sports;