'use strict';

class Jobs {
    getJobs(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}jobs`, { params: params });
    }

    getJobsUmpires(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}jobs/umpires`, { params: params });
    }

    getJobsUmpiresGames(args = { pathParams: '' }) {
        const { params, pathParams: { umpireId = '' } } = args;
        return this.request.get(`${this.apiHost}jobs/umpires/${umpireid}`, { params: params });
    }

    getJobsDatacasters(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}jobs/datacasters`, { params: params });
    }

    getJobsOfficialScorers(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}jobs/officialScorers`, { params: params });
    }
}

module.exports = Jobs;