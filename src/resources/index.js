'use strict';

const Attendance = require('./attendance');
const Awards = require('./awards');
const Broadcasts = require('./broadcasts');
const Conferences = require('./conferences');
const Divisions = require('./divisions');
const Draft = require('./draft');
const Game = require('./game');
const GameTypes = require('./gameTypes');
const HighLow = require('./highLow');
const HomeRunDerby = require('./homeRunDerby');
const Jobs = require('./jobs');
const League = require('./league');
const People = require('./people');
const RosterTypes = require('./rosterTypes');
const Schedule = require('./schedule');
const Seasons = require('./seasons');
const Standings = require('./standings');
const Sports = require('./sports');
const Stats = require('./stats');
const Teams = require('./teams');
const Transactions = require('./transactions');
const Venues = require('./venues');

const resources = { Attendance, Awards, Broadcasts, Conferences, Divisions, Draft, Game, GameTypes, HighLow, 
    HomeRunDerby, Jobs, League, People, RosterTypes, Schedule, Seasons, Sports, Standings, Stats, Teams, 
    Transactions, Venues };

module.exports = resources;