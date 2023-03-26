'use strict';

class People {
    getPeople(args = { pathParams: '' }) {
        const { params, pathParams: { personIds = '' } } = args;
        return fetch(`${this.apiHost}people/${personIds}`, { params: params });
    }   

    getPeopleChanges(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}people/changes`, { params: params });
    }

    getPeopleFreeAgents(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}people/freeAgents`, { params: params });
    }

    getPerson(args = { pathParams: '' }) {
        const { params, pathParams: { personId = '' } } = args;
        return fetch(`${this.apiHost}people/${personId}`, { params: params });
    }   

    getPersonStats(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '', personId = '' } } = args;
        return fetch(`${this.apiHost}people/${personId}/stats/game/${gamePk}`, { params: params });
    }
}

module.exports = People;
