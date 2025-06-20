'use strict';
const HttpClient = require('../httpClient');

class People {
    getPeople(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}people`, { params: params });
    }   

    getPeopleChanges(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}people/changes`, { params: params });
    }

    getPeopleFreeAgents(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}people/freeAgents`, { params: params });
    }

    getPerson(args = { pathParams: '' }) {
        const { params, pathParams: { personId = '' } } = args;
        return HttpClient.request(`${this.apiHost}people/${personId}`, { params: params });
    }   

    getPersonStats(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '', personId = '' } } = args;
        return HttpClient.request(`${this.apiHost}people/${personId}/stats/game/${gamePk}`, { params: params });
    }
}

module.exports = People;
