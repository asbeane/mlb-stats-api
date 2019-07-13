'use strict';

class Standings {
    getStandings(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}standings`, { params: params });
    }
}

module.exports = Standings;