'use strict';

class People {
    getPeople(args = { pathParams: '' }) {
        const { params, pathParams: { personIds = '' } } = args;
        return this.request.get(`${this.apiHost}people/${personIds}`, { params: params });
    }   

    getPeopleChanges(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}people/changes`, { params: params });
    }

    getPeopleFreeAgents(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}people/freeAgents`, { params: params });
    }

    getPerson(args = { pathParams: '' }) {
        const { params, pathParams: { personId = '' } } = args;
        return this.request.get(`${this.apiHost}people/${personId}`, { params: params });
    }   

    getPersonStats(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '', personId = '' } } = args;
        return this.request.get(`${this.apiHost}people/${personId}/stats/${gamePk}`, { params: params });
    }
}

module.exports = People;
