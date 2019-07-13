'use strict';

class Conferences {
    getConferences(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}conferences`, { params: params });
    }
}


module.exports = Conferences;