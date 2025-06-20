'use strict';
const HttpClient = require('../httpClient');

class Transactions {
    getTransactions(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}transactions`, { params: params });
    }
}

module.exports = Transactions;