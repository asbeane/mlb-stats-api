'use strict';

class Divisions {
    getDivisions(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}divisions`, { params: params });
    }
}

module.exports = Divisions;