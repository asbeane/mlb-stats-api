'use strict';
const HttpClient = require('../httpClient');

class Jobs {
    getJobs(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}jobs`, { params: params });
    }

    getJobsUmpires(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}jobs/umpires`, { params: params });
    }

    getJobsUmpiresGames(args = { pathParams: '' }) {
        const { params, pathParams: { umpireId = '' } } = args;
        return HttpClient.request(`${this.apiHost}jobs/umpires/${umpireId}`, { params: params });
    }

    getJobsDatacasters(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}jobs/datacasters`, { params: params });
    }

    getJobsOfficialScorers(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}jobs/officialScorers`, { params: params });
    }
}

module.exports = Jobs;