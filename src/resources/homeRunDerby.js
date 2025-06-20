'use strict';
const HttpClient = require('../httpClient');

class HomeRunDerby {
    getHomeRunDerby(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '', bracket = '', pool = '' } } = args;
        return HttpClient.request(`${this.apiHost}homeRunDerby/${gamePk}/${bracket}/${pool}`, { params: params });
    }
}

module.exports = HomeRunDerby;