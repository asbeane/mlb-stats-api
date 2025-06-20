'use strict';
const HttpClient = require('../httpClient');

class Stats {
    getStats(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}stats`, { params: params });
    }

    getStatsLeaders(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}stats/leaders`, { params: params });
    }

    getStatsStreaks(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}stats/streaks`, { params: params });
    }
}

module.exports = Stats;