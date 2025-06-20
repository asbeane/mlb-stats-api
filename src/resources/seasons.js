'use strict';
const HttpClient = require('../httpClient');

class Seasons {
    getSeasons(args = {}) {
        const { params } = args;
        const endpoint = params && params.all ? 'seasons/all' : 'seasons';
        return HttpClient.request(`${this.apiHost}${endpoint}`, { params: params });
    }

    getSeason(args = { pathParams: '' }) {
        const { params, pathParams: { seasonId = '' } } = args;
        return HttpClient.request(`${this.apiHost}seasons/${seasonId}`, { params: params });
    }
}

module.exports = Seasons;