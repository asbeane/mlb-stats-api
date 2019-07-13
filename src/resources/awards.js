'use strict';

class Awards {
    getAwards(args = { pathParams: '' }) {
        // if no args.pathParams - then return error
        const { params, pathParams: { awardId = '', recipients = '' } } = args;
        return this.request.get(`${this.apiHost}awards/${awardId}/${recipients}`, { params: params });
    }
}

module.exports = Awards;