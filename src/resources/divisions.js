'use strict';

class Divisions {
    getDivisions(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}divisions`, { params: params });
    }
}

module.exports = Divisions;