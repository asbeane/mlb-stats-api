'use strict';

class League {
    getLeague(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}league`, { params: params });
    }

    getLeagueAllStarBallot(args = { pathParams: '' }) {
        const { params, pathParams: { leagueId = '' } } = args;
        return fetch(`${this.apiHost}league/${leagueId}/allStarBallot`, { params: params });
    }

    getLeagueAllStarWriteIns(args = { pathParams: '' }) {
        const { params, pathParams: { leagueId = '' } } = args;
        return fetch(`${this.apiHost}league/${leagueId}/allStarWriteIns`, { params: params });
    }

    getLeagueAllStarFinalVote(args = { pathParams: '' }) {
        const { params, pathParams: { leagueId = '' } } = args;
        return fetch(`${this.apiHost}league/${leagueId}/allStarFinalVote`, { params: params });
    }
}

module.exports = League;