'use strict';

class Stats {
    getStats(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}stats`, { params: params });
    }

    getStatsLeaders(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}stats/leaders`, { params: params });
    }

    getStatsStreaks(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}stats/streaks`, { params: params });
    }
}

module.exports = Stats;