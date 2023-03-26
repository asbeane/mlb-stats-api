'use strict';

class Seasons {
    getSeasons(args = { pathParams: '' }) {
        const { params, pathParams: { all = '' } } = args;
        return fetch(`${this.apiHost}seasons/${all}`, { params: params });
    }

    getSeason(args = { pathParams: '' }) {
        const { params, pathParams: { seasonId = '' } } = args;
        return fetch(`${this.apiHost}seasons/${seasonId}`, { params: params });
    }
}

module.exports = Seasons;