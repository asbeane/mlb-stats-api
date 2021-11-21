'use strict';

class Venues {
    getVenues(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}venues`, { params: params });
    }

    getVenue(args = { pathParams: '' }) {
        const { params, pathParams: { venueId = ''} } = args;
        return this.request.get(`${this.apiHost}venues/${venueId}`, { params: params });
    }
}

module.exports = Venues;