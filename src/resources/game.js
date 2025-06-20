'use strict';
const HttpClient = require('../httpClient');

class Game {
    getGameFeed(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost.replace('v1/', 'v1.1/')}game/${gamePk}/feed/live`, { params: params });
    }

    getGameDiffPatch(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost.replace('v1/', 'v1.1/')}game/${gamePk}/feed/live/diffPatch`, { params: params });
    }

    getGameTimestamps(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost.replace('v1/', 'v1.1/')}game/${gamePk}/feed/live/timestamps`, { params: params });
    }

    getGameChanges(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}game/changes`, { params: params });
    }

    getGameContent(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/content`, { params: params });
    }

    getGameColor(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/feed/color`, { params: params });
    }

    getGameColorDiff(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/feed/color/diffPatch`, { params: params });
    }

    getGameColorTimestamps(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/feed/color/timestamps`, { params: params });
    }

    getGameBoxscore(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/boxscore`, { params: params });
    }

    getGameWinProbability(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/winProbability`, { params: params });
    }

    getGameContextMetrics(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/contextMetrics`, { params: params });
    }

    getGameLinescore(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/linescore`, { params: params });
    }

    getGamePlayByPlay(args = { pathParams: '' }) {
        const { params, pathParams: { gamePk = '' } } = args;
        return HttpClient.request(`${this.apiHost}game/${gamePk}/playByPlay`, { params: params });
    }

    getGamePace(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}gamePace`, { params: params });
    }
}

module.exports = Game;