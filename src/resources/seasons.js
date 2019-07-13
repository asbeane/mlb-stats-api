'use strict';

class Seasons {
    getSeasons(args = { pathParams: '' }) {
        const { params, pathParams: { all = '' } } = args;
        return this.request.get(`${this.apiHost}seasons/${all}`, { params: params });
    }

    getSeason(args = { pathParams: '' }) {
        const { params, pathParams: { seasonId = '' } } = args;
        return this.request.get(`${this.apiHost}seasons/${seasonId}`, { params: params });
    }
}

module.exports = Seasons;