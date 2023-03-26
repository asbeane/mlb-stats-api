'use strict'

class Schedule {
    getSchedule(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}schedule`, { params: params });
    }

    getScheduleTied(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}schedule/games/tied`, { params: params });
    }

    getSchedulePostseason(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}schedule/postseason`, { params: params });
    }

    getSchedulePostseasonSeries(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}schedule/postseason/series`, { params: params });
    }

    getSchedulePostseasonTuneIn(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}schedule/postseason/tuneIn`, { params: params });
    }
}

module.exports = Schedule;