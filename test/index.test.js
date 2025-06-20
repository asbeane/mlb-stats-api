'use strict';
const MLBStatsAPI = require('../index');
const should = require('should');

describe('MLBStatsAPI', () => {
    let mlbStats;

    beforeEach(() => {
        mlbStats = new MLBStatsAPI();
    });

    describe('Constructor', () => {
        it('Should create instance with default host', () => {
            should(mlbStats.host).be.exactly('https://statsapi.mlb.com/api/');
            should(mlbStats.apiHost).be.exactly('https://statsapi.mlb.com/api/v1/');
        });

        it('Should create instance with custom host', () => {
            const customStats = new MLBStatsAPI('https://custom.host/api/');
            should(customStats.host).be.exactly('https://custom.host/api/');
            should(customStats.apiHost).be.exactly('https://custom.host/api/v1/');
        });
    });

    describe('Attendance Endpoints', () => {
        it('Should Get Attendance with a 200 Status', async () => {
            const response = await mlbStats.getAttendance({ params: { teamId: 111, leagueId: 103, leagueListId: 'mlb' } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Awards Endpoints', () => {
        it('Should Get Awards with a 200 Status', async () => {
            const response = await mlbStats.getAwards();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Conferences Endpoints', () => {
        it('Should Get Conferences with a 200 Status', async () => {
            const response = await mlbStats.getConferences();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Divisions Endpoints', () => {
        it('Should Get Divisions with a 200 Status', async () => {
            const response = await mlbStats.getDivisions();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.divisions).be.an.Array();
        });
    });

    describe('Draft Endpoints', () => {
        it('Should Get Draft with a 200 Status', async () => {
            const response = await mlbStats.getDraft();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Game Endpoints', () => {
        it('Should Get Single Game Feed with 200 Status', async () => {
            const response = await mlbStats.getGameFeed({ pathParams: { gamePk: 534196 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.gamePk).be.exactly(534196);
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
            should(response.data).be.an.Object();
        }).timeout(5000);

        it('Should Get Single Game Context Metrics with a 200 Status', async () => {
            const response = await mlbStats.getGameContextMetrics({ pathParams: { gamePk: 607243 } });
            should(response.status).be.exactly(200);
        });

        it('Should Get Single Game Win Probability with a 200 Status', async () => {
            const response = await mlbStats.getGameWinProbability({ pathParams: { gamePk: 607243 } });
            should(response.status).be.exactly(200);
        });

        it('Should Get Single Game Boxscore with a 200 Status', async () => {
            const response = await mlbStats.getGameBoxscore({ pathParams: { gamePk: 607243 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
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
            should(response.data).be.an.Object();
        });

        it('Should Get Single Game Play by Play with a 200 Status', async () => {
            const response = await mlbStats.getGamePlayByPlay({ pathParams: { gamePk: 607243 } });
            should(response.status).be.exactly(200);
        });

        it('Should Get Game Pace for specific game with a 200 Status', async () => {
            const response = await mlbStats.getGamePace({ pathParams: { gamePk: 607243 } });
            should(response.status).be.exactly(200);
        });

        it('Should Get Game Pace general with a 200 Status', async () => {
            const response = await mlbStats.getGamePace();
            should(response.status).be.exactly(200);
        });
    });

    describe('HighLow Endpoints', () => {
        it('Should Get HighLow with a 200 Status', async () => {
            const response = await mlbStats.getHighLow({ params: { sortStat: 'homeRuns', season: 2023 }, pathParams: { orgType: 'team' } });
            should(response.status).be.exactly(200);
        }).timeout(10000);
    });

    describe('Home Run Derby Endpoints', () => {
        it('Should Fail to Get Home Run Derby with a 404 Status', async () => {
            try {
                await mlbStats.getHomeRunDerby({ pathParams: { gamePk: 13456 } });
                should.fail('Expected error was not thrown');
            } catch (err) {
                should(err.response.status).be.exactly(404);
            }
        });
    });

    describe('League Endpoints', () => {
        it('Should Get League with a 200 Status', async () => {
            const response = await mlbStats.getLeague({ params: { sportid: 1, leagueIds: 103 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('People Endpoints', () => {
        it('Should Get People with a 200 Status', async () => {
            const response = await mlbStats.getPeople({ params: { personIds: '660271' } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.people).be.an.Array();
        });

        it('Should Get Person with a 200 Status', async () => {
            const response = await mlbStats.getPerson({ pathParams: { personId: 660271 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Schedule Endpoints', () => {
        it('Should Get Schedule with a 200 Status', async () => {
            const response = await mlbStats.getSchedule({ params: { sportId: 1, date: '2023-07-01' } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.dates).be.an.Array();
        });
    });

    describe('Seasons Endpoints', () => {
        it('Should Get Seasons with a 200 Status', async () => {
            const response = await mlbStats.getSeasons({ params: { sportId: 1 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.seasons).be.an.Array();
        });

        it.skip('Should Get Single Season with a 200 Status', async () => {
            // Skipping this test as the endpoint may not support individual season queries
            const response = await mlbStats.getSeason({ pathParams: { seasonId: 2023 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Sports Endpoints', () => {
        it('Should Get Sports with a 200 Status', async () => {
            const response = await mlbStats.getSports();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.sports).be.an.Array();
        });
    });

    describe('Standings Endpoints', () => {
        it('Should Get Standings with a 200 Status', async () => {
            const response = await mlbStats.getStandings({ params: { leagueId: 103 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.records).be.an.Array();
        });
    });

    describe('Stats Endpoints', () => {
        it('Should Get Stats Leaders with a 200 Status', async () => {
            const response = await mlbStats.getStatsLeaders({ params: { leaderCategories: 'homeRuns', season: 2023 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Teams Endpoints', () => {
        it('Should Get Teams with a 200 Status', async () => {
            const response = await mlbStats.getTeams({ params: { sportId: 1 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.teams).be.an.Array();
        });

        it('Should Get Single Team with a 200 Status', async () => {
            const response = await mlbStats.getTeam({ pathParams: { teamId: 111 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.teams).be.an.Array();
        });

        it('Should Get Team Roster with a 200 Status', async () => {
            const response = await mlbStats.getTeamRoster({ pathParams: { teamId: 111 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.roster).be.an.Array();
        });
    });

    describe('Venues Endpoints', () => {
        it('Should Get Venues with a 200 Status', async () => {
            const response = await mlbStats.getVenues();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.venues).be.an.Array();
        });

        it('Should Get Single Venue with a 200 Status', async () => {
            const response = await mlbStats.getVenue({ pathParams: { venueId: 1 } });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
            should(response.data.venues).be.an.Array();
        });
    });

    describe('Error Handling', () => {
        it('Should handle invalid game ID gracefully', async () => {
            try {
                await mlbStats.getGameFeed({ pathParams: { gamePk: 'invalid' } });
                should.fail('Expected error was not thrown');
            } catch (err) {
                should(err).be.an.Error();
                should(err.response.status).be.within(400, 404);
            }
        });

        it('Should handle missing path params', async () => {
            try {
                await mlbStats.getTeam({});
                should.fail('Expected error was not thrown');
            } catch (err) {
                should(err).be.an.Error();
            }
        });
    });
});