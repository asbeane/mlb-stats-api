'use strict';

class Draft {
    getDraft(args = { pathParams: '' }) {
        // if empty object but no pathParams return error, or handle it
        const { params, pathParams: { year = '2019', latest = '' } } = args;
        return fetch(`${this.apiHost}draft/${year}/${latest}`, { params: params });
    }
}

module.exports = Draft;