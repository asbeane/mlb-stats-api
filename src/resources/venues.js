'use strict';
const HttpClient = require('../httpClient');

class Venues {
    getVenues(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}venues`, { params: params });
    }

    getVenue(args = { pathParams: '' }) {
        const { params, pathParams: { venueId = ''} } = args;
        return HttpClient.request(`${this.apiHost}venues/${venueId}`, { params: params });
    }
}

module.exports = Venues;