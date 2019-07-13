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
const mlbStats = new MLBStatsAPI();```
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