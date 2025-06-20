# MLB Stats API - Complete Endpoint Reference

This document lists all available endpoints in the mlb-stats-api library.

## Summary

- **Total Endpoints**: 72
- **Tested Endpoints**: 57
- **Resource Categories**: 22

## Endpoints by Category

### Attendance
- `getAttendance()` - Get attendance records

### Awards  
- `getAwards()` - Get awards information

### Broadcasts
- `getBroadcasts()` - Get broadcast information for games

### Conferences
- `getConferences()` - Get conference information

### Divisions
- `getDivisions()` - Get division information

### Draft
- `getDraft()` - Get draft information

### Game (14 endpoints)
- `getGameFeed()` - Get live game feed data
- `getGameDiffPatch()` - Get game feed diff patch
- `getGameTimestamps()` - Get game feed timestamps
- `getGameChanges()` - Get recently changed games
- `getGameContent()` - Get game content and media
- `getGameColor()` - Get game color feed
- `getGameColorDiff()` - Get game color diff patch
- `getGameColorTimestamps()` - Get game color timestamps
- `getGameBoxscore()` - Get game boxscore
- `getGameWinProbability()` - Get win probability data
- `getGameContextMetrics()` - Get game context metrics
- `getGameLinescore()` - Get game linescore
- `getGamePlayByPlay()` - Get play-by-play data
- `getGamePace()` - Get game pace information

### Game Types
- `getGameTypes()` - Get list of game types

### High/Low
- `getHighLow()` - Get statistical highs and lows

### Home Run Derby
- `getHomeRunDerby()` - Get home run derby information

### Jobs (5 endpoints)
- `getJobs()` - Get jobs/officials information
- `getJobsUmpires()` - Get umpire information
- `getJobsUmpiresGames()` - Get games for specific umpire
- `getJobsDatacasters()` - Get datacaster information
- `getJobsOfficialScorers()` - Get official scorer information

### League (4 endpoints)
- `getLeague()` - Get league information
- `getLeagueAllStarBallot()` - Get all-star ballot
- `getLeagueAllStarWriteIns()` - Get all-star write-ins
- `getLeagueAllStarFinalVote()` - Get all-star final vote

### People (5 endpoints)
- `getPeople()` - Get people/players
- `getPeopleChanges()` - Get recent people changes
- `getPeopleFreeAgents()` - Get free agents
- `getPerson()` - Get specific person
- `getPersonStats()` - Get person stats for specific game

### Roster Types
- `getRosterTypes()` - Get list of roster types

### Schedule (5 endpoints)
- `getSchedule()` - Get game schedule
- `getScheduleTied()` - Get tied games
- `getSchedulePostseason()` - Get postseason schedule
- `getSchedulePostseasonSeries()` - Get postseason series
- `getSchedulePostseasonTuneIn()` - Get postseason tune-in info

### Seasons (2 endpoints)
- `getSeasons()` - Get seasons list
- `getSeason()` - Get specific season

### Sports (2 endpoints)
- `getSports()` - Get sports list
- `getSportsPlayers()` - Get players for specific sport

### Standings
- `getStandings()` - Get standings

### Stats (3 endpoints)
- `getStats()` - Get statistics
- `getStatsLeaders()` - Get statistical leaders
- `getStatsStreaks()` - Get statistical streaks

### Teams (10 endpoints)
- `getTeams()` - Get all teams
- `getTeamsHistory()` - Get teams history
- `getTeamsStats()` - Get teams statistics
- `getTeamsAffiliates()` - Get team affiliates
- `getTeam()` - Get specific team
- `getTeamAlumni()` - Get team alumni
- `getTeamCoaches()` - Get team coaches
- `getTeamPersonnel()` - Get team personnel
- `getTeamLeaders()` - Get team leaders
- `getTeamRoster()` - Get team roster

### Transactions
- `getTransactions()` - Get player transactions

### Venues (2 endpoints)
- `getVenues()` - Get all venues
- `getVenue()` - Get specific venue

## Usage Examples

### Basic Request
```javascript
const response = await mlbStats.getTeams();
```

### With Query Parameters
```javascript
const response = await mlbStats.getTeams({ 
    params: { sportId: 1, season: 2024 } 
});
```

### With Path Parameters
```javascript
const response = await mlbStats.getTeam({ 
    pathParams: { teamId: 111 } 
});
```

### With Both Parameters
```javascript
const response = await mlbStats.getPersonStats({ 
    pathParams: { personId: 660271, gamePk: 634197 },
    params: { fields: 'hitting,pitching' }
});
```

## Notes

- Some endpoints may require specific parameters to function correctly
- Endpoints marked as "skipped" in tests may be deprecated or require special conditions
- All endpoints return a Promise with the response object containing status, data, headers, etc.