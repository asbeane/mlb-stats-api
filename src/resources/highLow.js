'use strict';
const HttpClient = require('../httpClient');

class HighLow { 
    getHighLow(args = { pathParams: '' }) {
        const { params, pathParams: { orgType = '' } } = args;
        return HttpClient.request(`${this.apiHost}highLow/${orgType}`, { params: params });
    }
}

module.exports = HighLow;