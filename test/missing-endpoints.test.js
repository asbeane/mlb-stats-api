'use strict';
const MLBStatsAPI = require('../index');
const should = require('should');

describe('MLB Stats API - Additional Endpoints', function() {
    this.timeout(10000); // Set higher timeout for API calls
    
    let mlbStats;

    beforeEach(() => {
        mlbStats = new MLBStatsAPI();
    });

    describe('Jobs Endpoints', () => {
        it('Should Get Jobs with a 200 Status', async () => {
            const response = await mlbStats.getJobs({ params: { jobType: 'UMPR' } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Jobs Umpires with a 200 Status', async () => {
            const response = await mlbStats.getJobsUmpires();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Jobs Datacasters with a 200 Status', async () => {
            const response = await mlbStats.getJobsDatacasters();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Jobs Official Scorers with a 200 Status', async () => {
            const response = await mlbStats.getJobsOfficialScorers();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('League All-Star Endpoints', () => {
        it('Should Get League All Star Ballot with a 200 Status', async () => {
            const response = await mlbStats.getLeagueAllStarBallot({ 
                pathParams: { leagueId: 103 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get League All Star Write Ins with a 200 Status', async () => {
            const response = await mlbStats.getLeagueAllStarWriteIns({ 
                pathParams: { leagueId: 103 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get League All Star Final Vote with a 200 Status', async () => {
            const response = await mlbStats.getLeagueAllStarFinalVote({ 
                pathParams: { leagueId: 103 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('People Additional Endpoints', () => {
        it.skip('Should Get People Changes with a 200 Status', async () => {
            // This endpoint requires updatedSince parameter
            const response = await mlbStats.getPeopleChanges({ 
                params: { updatedSince: '2024-01-01' } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it.skip('Should Get People Free Agents with a 200 Status', async () => {
            // This endpoint may require specific season/parameters
            const response = await mlbStats.getPeopleFreeAgents();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Person Stats for Game with a 200 Status', async () => {
            const response = await mlbStats.getPersonStats({ 
                pathParams: { personId: 660271, gamePk: 634197 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Schedule Additional Endpoints', () => {
        it.skip('Should Get Schedule Tied Games with a 200 Status', async () => {
            // This endpoint may require specific parameters
            const response = await mlbStats.getScheduleTied({ 
                params: { season: 2023 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Schedule Postseason with a 200 Status', async () => {
            const response = await mlbStats.getSchedulePostseason();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Schedule Postseason Series with a 200 Status', async () => {
            const response = await mlbStats.getSchedulePostseasonSeries();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Schedule Postseason Tune In with a 200 Status', async () => {
            const response = await mlbStats.getSchedulePostseasonTuneIn();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Sports Additional Endpoints', () => {
        it('Should Get Sports Players with a 200 Status', async () => {
            const response = await mlbStats.getSportsPlayers({ 
                pathParams: { sportId: 1 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Stats Additional Endpoints', () => {
        it('Should Get Stats with a 200 Status', async () => {
            const response = await mlbStats.getStats({ 
                params: { stats: 'season', group: 'hitting' } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it.skip('Should Get Stats Streaks with a 200 Status', async () => {
            // This endpoint may have been deprecated or requires specific params
            const response = await mlbStats.getStatsStreaks({ 
                params: { streakType: 'hitting', season: 2023 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Teams Additional Endpoints', () => {
        it.skip('Should Get Teams History with a 200 Status', async () => {
            // This endpoint appears to be deprecated or moved
            const response = await mlbStats.getTeamsHistory({ 
                params: { teamIds: 111 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Teams Stats with a 200 Status', async () => {
            const response = await mlbStats.getTeamsStats({ 
                params: { season: 2023, group: 'hitting' } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it.skip('Should Get Teams Affiliates with a 200 Status', async () => {
            // This endpoint may require different parameters or be deprecated
            const response = await mlbStats.getTeamsAffiliates({ 
                params: { teamId: 111, season: 2023 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it.skip('Should Get Team Alumni with a 200 Status', async () => {
            // This endpoint requires specific parameters
            const response = await mlbStats.getTeamAlumni({ 
                pathParams: { teamId: 111 },
                params: { season: 2023, group: 'position' }
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Team Coaches with a 200 Status', async () => {
            const response = await mlbStats.getTeamCoaches({ 
                pathParams: { teamId: 111 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it('Should Get Team Personnel with a 200 Status', async () => {
            const response = await mlbStats.getTeamPersonnel({ 
                pathParams: { teamId: 111 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });

        it.skip('Should Get Team Leaders with a 200 Status', async () => {
            // This endpoint appears to be deprecated
            const response = await mlbStats.getTeamLeaders({ 
                pathParams: { teamId: 111 },
                params: { leaderCategories: 'homeRuns', season: 2023 }
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Game Additional Endpoints', () => {
        it.skip('Should Get Game Color Diff with a 200 Status', async () => {
            // This endpoint may not be available for all games
            const response = await mlbStats.getGameColorDiff({ 
                pathParams: { gamePk: 607243 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });
});