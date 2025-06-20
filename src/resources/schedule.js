'use strict';
const HttpClient = require('../httpClient');

class Schedule {
    getSchedule(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule`, { params: params });
    }

    getScheduleTied(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule/games/tied`, { params: params });
    }

    getSchedulePostseason(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule/postseason`, { params: params });
    }

    getSchedulePostseasonSeries(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule/postseason/series`, { params: params });
    }

    getSchedulePostseasonTuneIn(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}schedule/postseason/tuneIn`, { params: params });
    }
}

module.exports = Schedule;