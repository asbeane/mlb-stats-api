'use strict';

class HighLow { 
    getHighLow(args = { pathParams: '' }) {
        const { params, pathParams: { orgType = '' } } = args;
        return fetch(`${this.apiHost}highLow/${orgType}`, { params: params });
    }
}

module.exports = HighLow;