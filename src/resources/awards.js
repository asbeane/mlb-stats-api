'use strict';

class Awards {
    getAwards(args = { pathParams: '' }) {
        // if no args.pathParams - then return error
        const { params, pathParams: { awardId = '', recipients = '' } } = args;
        return fetch(`${this.apiHost}awards/${awardId}/${recipients}`, { params: params });
    }
}

module.exports = Awards;