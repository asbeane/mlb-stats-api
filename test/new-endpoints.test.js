'use strict';
const MLBStatsAPI = require('../index');
const should = require('should');

describe('MLB Stats API - New Endpoints', function() {
    this.timeout(10000);
    
    let mlbStats;

    beforeEach(() => {
        mlbStats = new MLBStatsAPI();
    });

    describe('Transactions Endpoint', () => {
        it('Should Get Transactions with a 200 Status', async () => {
            const response = await mlbStats.getTransactions({ 
                params: { teamId: 111, startDate: '2024-01-01', endDate: '2024-12-31' } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Broadcasts Endpoint', () => {
        it.skip('Should Get Broadcasts with a 200 Status', async () => {
            // This endpoint may be experiencing issues
            const response = await mlbStats.getBroadcasts({ 
                params: { date: '2024-07-01', sportId: 1 } 
            });
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Game Types Endpoint', () => {
        it('Should Get Game Types with a 200 Status', async () => {
            const response = await mlbStats.getGameTypes();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });

    describe('Roster Types Endpoint', () => {
        it('Should Get Roster Types with a 200 Status', async () => {
            const response = await mlbStats.getRosterTypes();
            should(response.status).be.exactly(200);
            should(response.data).be.an.Object();
        });
    });
});