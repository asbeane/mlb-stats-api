'use strict';
const HttpClient = require('../httpClient');

class Awards {
    getAwards(args = { pathParams: '' }) {
        // if no args.pathParams - then return error
        const { params, pathParams: { awardId = '', recipients = '' } } = args;
        return HttpClient.request(`${this.apiHost}awards/${awardId}/${recipients}`, { params: params });
    }
}

module.exports = Awards;