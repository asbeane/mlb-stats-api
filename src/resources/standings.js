'use strict';

class Standings {
    getStandings(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}standings`, { params: params });
    }
}

module.exports = Standings;