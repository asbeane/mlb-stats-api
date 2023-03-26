'use strict';

class HomeRunDerby {
    getHomeRunDerby(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '', bracket = '', pool = '' } } = args;
        return fetch(`${this.apiHost}homeRunDerby/${gamePk}/${bracket}/${pool}`, { params: params });
    }
}

module.exports = HomeRunDerby;