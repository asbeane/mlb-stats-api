'use strict';

class Teams {
    getTeams(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}teams`, { params: params });
    }

    getTeamsHistory(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}teams/history`, { params: params });
    }

    getTeamsStats(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}teams/stats`, { params: params });
    }

    getTeamsAffiliates(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}teams/stats/affiliates`, { params: params });
    }

    getTeam(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}`, { params: params });
    }

    getTeamAlumni(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}/alumni`, { params: params });
    }

    getTeamCoaches(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}/coaches`, { params: params });
    }

    getTeamPersonnel(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}/personnel`, { params: params });
    }

    getTeamLeaders(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}/leaders`, { params: params });
    }

    getTeamRoster(args = { pathParams: '' }) {
        const { params, pathParams: { teamId = ''} } = args;
        return fetch(`${this.apiHost}teams/${teamId}/roster`, { params: params });
    }

}

module.exports = Teams;