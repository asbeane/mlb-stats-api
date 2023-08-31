'use strict';
const MLBStatsAPI = require('../index');
const should = require('should');

describe('MLBStatsAPI', () => {
    const mlbStats = new MLBStatsAPI();

    it('Should Get Attendance with a 200 Status', async () => {
        const response = await mlbStats.getAttendance({ params: { teamId: 111, leagueId: 103, leagueListId: 'mlb' } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Awards with a 200 Status', async () => {
        const response = await mlbStats.getAwards();
        should(response.status).be.exactly(200);
    });

    it('Should Get Conferences with a 200 Status', async () => {
        const response = await mlbStats.getConferences();
        should(response.status).be.exactly(200);
    });

    it('Should Get Divisions with a 200 Status', async () => {
        const response = await mlbStats.getDivisions();
        should(response.status).be.exactly(200);
    });

    it('Should Get Divisions with a 200 Status', async () => {
        const response = await mlbStats.getDivisions();
        should(response.status).be.exactly(200);
    });

    it('Should Get Draft with a 200 Status', async () => {
        const response = await mlbStats.getDraft();
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Feed with 200 Status', async () => {
        const response = await mlbStats.getGameFeed({ pathParams: { gamePk: 534196 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Diff Patch Data with a 200 Status', async () => {
        const response = await mlbStats.getGameDiffPatch({ pathParams: { gamePk: 606642 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Timestamp with a 200 Status', async () => {
        const response = await mlbStats.getGameTimestamps({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Game Changes with a 200 Status', async () => {
        const response = await mlbStats.getGameChanges({ params: { updatedSince: 5 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Context Metrics with a 200 Status', async () => {
        const response = await mlbStats.getGameContextMetrics({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Win Probability with a 200 Status', async () => {
        const response = await mlbStats.getGameContextMetrics({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Boxscore with a 200 Status', async () => {
        const response = await mlbStats.getGameBoxscore({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Content with a 200 Status', async () => {
        const response = await mlbStats.getGameContent({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Color with a 200 Status', async () => {
        const response = await mlbStats.getGameColor({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Color Timestamps with a 200 Status', async () => {
        const response = await mlbStats.getGameColorTimestamps({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGameLinescore({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePlayByPlay({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePace({ pathParams: { gamePk: 607243 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePace();
        should(response.status).be.exactly(200);
    });

    it('Should Get HighLow with a 200 Status', async () => {
        const response = await mlbStats.getHighLow({ params: { sortStat: '', season: 2019 }, pathParams: { orgType: 'team' } });
        should(response.status).be.exactly(200);
    });

    it('Should Fail to Get Home Run Derby with a 404 Status', async () => {
        let response;
        try {
            response = await mlbStats.getHomeRunDerby({ pathParams: { gamePk: 13456 } });

        } catch (err) {
            should(err.response.status).be.exactly(404);
        }
    });

    it('Should Get League with a 200 Status', async () => {
        const response = await mlbStats.getLeague({ params: { sportid: 1, leagueIds: 103 } });
        should(response.status).be.exactly(200);
    });
})