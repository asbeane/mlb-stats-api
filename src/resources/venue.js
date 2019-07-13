'use strict';

class Venue {
    getVenue(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}venue`, { params: params });
    }
}

module.exports = Venue;