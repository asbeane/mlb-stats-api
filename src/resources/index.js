'use strict';

const Attendance = require('./attendance');
const Awards = require('./awards');
const Conferences = require('./conferences');
const Divisions = require('./divisions');
const Draft = require('./draft');
const Game = require('./game');
const HighLow = require('./highLow');
const HomeRunDerby = require('./homeRunDerby');
const League = require('./league');
const People = require('./people');
const Schedule = require('./schedule');
const Seasons = require('./seasons');
const Standings = require('./standings');
const Sports = require('./sports');
const Stats = require('./stats');
const Teams = require('./teams');
const Venues = require('./venues');

const resources = { Attendance, Awards, Conferences, Divisions, Draft, Game, HighLow, HomeRunDerby, League,
    People, Schedule, Seasons, Sports, Standings, Stats, Teams, Venues };

module.exports = resources;