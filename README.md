# mlb-stats-api

Node.js Library for calling the MLB Stats API

[![npm](https://img.shields.io/npm/dt/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)
[![npm](https://img.shields.io/npm/v/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)
[![License](https://img.shields.io/github/license/asbeane/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)

## Install

``` npm install mlb-stats-api --save ```

## Dependencies

Currently powered by Axios! This decision was made largely due to the deprecation of the popular request library, and because axios is a well supported library for making HTTP requests using promises.

## How to use

In your project import the module like so: 
```
const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();
```

Optional arguments can be passed to the constructor, which include:
* host - defaults to the mlb-stats-api production host
* version - defaults to v1, the current live version of the API

## Making requests

Each callable function takes a single argument, which is an object.
The object can have one or two top level properties, which is how the query parameters, and the path parameters
are passed to the library.

Example:

```
const response = await mlbStats.getAttendance({params: { teamId: 111, leagueId: 103, leagueListid: 103 }});
```

The ```params``` property represents an object describing the query parameters.

Example:

```
const response = await mlbStats.getGame({ pathParams: { gamePk: 12345 }});
```

The ```pathParams``` property represents an object describing the name path parameters.

Both the pathParams and params can be passed in the object passed to any given request (where applicable to the specific request).

```
const response = await mlbStats.getGame(params: { ...... }, { pathParams: { ...... }});
```

## Supported Requests and their corresponding functions:
## Note: There are currently more requests supported, but the docs are a Work In Progress

 * /attendance - mlbStats.getAttendance()
 * /awards - mlbStats.getAwards()
 * /conferences - mlbStats.getConferences()
 * /divisions - mlbStats.getDivisions()
 * /draft - mlbStats.getDraft()
 * /game 
     * /game/{gamePk}/feed/live - mlbStats.getGame()
     * /game/{gamePk}/feed/live/diffPatch -  mlbStats.getGameDiffPatch()
     * /game/{gamePk}/feed/live/timestamps - mlbStats.getGameTimestamps()
     * /game/changes - mlbStats.getGameChanges()
     * /game/{gamePk}/contextMetrics - mlbStats.getGameContextMetrics()
     * /game/{gamePk}/winProbability - mlbStats.getGameWinProbability()
     * /game/{gamePk}/boxscore - mlbStats.getGameBoxscore()
     * /game/{gamePk}/content - mlbStats.getGameContent()
     * /game/{gamePk}/feed/color - mlbStats.getGameColor()
     * /game/{gamePk}/feed/color/diffPatch - mlbStats.getGameColorDiff()
     * /game/{gamePk}/feed/color/timestamps - mlbStats.getGameColorTimestamps()
     * /game/{gamePk}/linescore - mlbStats.getGameLinescore()
     * /game/{gamePk}/playByPlay = mlbStats.getGamePlayByPlay()
     * /gamePace - mlbStats.getGamePace()
 * /highLow/{orgType} - mlbStats.getHighLow()
 * /homeRunDerby/{gamePk} = mlbStats.getHomeRunDerby()
 * /league - mlbStats.getLeague()
    * /league/{leagueId}/allStarBallot - mlbStats.getLeagueAllStarBallot()
    * /league/{leagueId}/allStarWriteIns - mlbStats.getLeagueAllStarWriteIns()
    * /league/{leagueId}/allStarFinalVote - mlbStats.getLeagueAllStarFinalVote()
 * /people - mlbStats.getPeople()
    * /people/changes - mlbStats.getPeopleChanges()
    * /people/freeAgents - mlbStats.getPeoplefreeAgents()
    * /people/{personId} = mlb.getPerson()
    * /people/{personId}/stats/game/{gamePk} - mlbStats.getPersonStats()
 * /jobs - mlbStats.getJobs()
    * /jobs/umpires - mlbStats.getJobsUmpires()
    * /jobs/umpires/games/{umpireId} = mlbStats.getJobsUmpiresGames()
    * /jobs/datacasters - mlbStats.getJobsDatacasters()
    * /jobs/officialScorers - mlbStats.getJobsOfficialScorers()
 * /schedule - mlbStats.getSchedule() 
    * /schedule/games/tied - mlbstats.getScheduleTied() 
    * /schedule/postseason - mlbStats.getSchedulePostseason()
    * /schedule/postseason/series - mlbStats.getSchedulePostseasonSeries()
    * /schedule/postseason/tuneIn - mlbStats.getSchedulePostseasonTuneIn()
 * /seasons{all} - mlbStats.getSeasons()
    * /seasons/{seasonId} - mlbStats.getSeason()
 * /sports - mlbStats.getSports()
 * /sports/{sportId}/player - mlbStats.getSportsPlayers()
 * /standings - mlbStats.getStandings()
 * /stats - mlbStats.getStats()
    * /stats/leaders - mlbStats.getStatsLeaders()
    * /stats/streaks - mlbStats.getStatsStreaks()
 * /teams - mlbStats.getTeams()
    * /teams/history - mlbStats.getTeamsHistory()
    * /teams/stats - mlbStats.getTeamsStats()
    * /teams/affiliates - mlbStats.getTeamsAffiliates()
    * /teams/{teamId} - mlbStats.getTeam()
    * /teams/{teamId}/alumni - mlbStats.getTeamAlumni()
    * /teams/{teamId}/coaches - mlbStats.getTeamCoaches()
    * /teams/{teamId}/personnel - mlbStats.getTeamPersonnel()
    * /teams/{teamId}/leaders - mlbStats.getTeamLeaders()
    * /teams/{teamId}/roster - mlbStats.getTeamRoster()
 * /venues - mlbStats.getVenue()
