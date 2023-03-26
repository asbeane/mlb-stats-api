'use strict';

class Conferences {
    getConferences(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}conferences`, { params: params });
    }
}

module.exports = Conferences;