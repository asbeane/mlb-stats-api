'use strict';

class Venues {
    getVenues(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}venues`, { params: params });
    }

    getVenue(args = { pathParams: '' }) {
        const { params, pathParams: { venueId = ''} } = args;
        return fetch(`${this.apiHost}venues/${venueId}`, { params: params });
    }
}

module.exports = Venues;