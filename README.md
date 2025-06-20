# mlb-stats-api

Node.js Library for calling the MLB Stats API

[![npm](https://img.shields.io/npm/dt/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)
[![npm](https://img.shields.io/npm/v/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)
[![License](https://img.shields.io/github/license/asbeane/mlb-stats-api.svg)](https://www.npmjs.com/package/mlb-stats-api)

## Features

- ✅ **Complete MLB Stats API coverage** - Access all endpoints of the official MLB Stats API
- ✅ **TypeScript support** - Full type definitions included for better development experience
- ✅ **Modern Node.js** - Built for Node.js 18+ with native ES6+ features
- ✅ **Zero dependencies** - Lightweight with no external runtime dependencies
- ✅ **Promise-based** - Modern async/await support
- ✅ **Well tested** - Comprehensive test suite covering all endpoints

## Install

```bash
npm install mlb-stats-api --save
```

## Quick Start

### JavaScript (CommonJS)

```javascript
const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();

async function getGameData() {
    try {
        // Get current teams
        const teams = await mlbStats.getTeams({ params: { sportId: 1 } });
        console.log(teams.data.teams);
        
        // Get today's games
        const schedule = await mlbStats.getSchedule({ 
            params: { 
                sportId: 1, 
                date: new Date().toISOString().split('T')[0] 
            } 
        });
        console.log(schedule.data.dates);
        
        // Get live game feed (if game is in progress)
        const gameFeed = await mlbStats.getGameFeed({ 
            pathParams: { gamePk: 634197 } 
        });
        console.log(gameFeed.data);
    } catch (error) {
        console.error('Error fetching MLB data:', error.message);
    }
}

getGameData();
```

### TypeScript

```typescript
import MLBStatsAPI from 'mlb-stats-api';
import type { TeamsResponse, ScheduleResponse, GameFeedResponse } from 'mlb-stats-api/types';

const mlbStats = new MLBStatsAPI();

async function getTypedGameData(): Promise<void> {
    try {
        // TypeScript provides full intellisense and type checking
        const teams = await mlbStats.getTeams({ params: { sportId: 1 } });
        const teamsData: TeamsResponse = teams.data;
        
        const schedule = await mlbStats.getSchedule({ 
            params: { 
                sportId: 1, 
                date: '2024-07-01' 
            } 
        });
        const scheduleData: ScheduleResponse = schedule.data;
        
        const gameFeed = await mlbStats.getGameFeed({ 
            pathParams: { gamePk: 634197 } 
        });
        const gameData: GameFeedResponse = gameFeed.data;
        
        console.log(`Found ${teamsData.teams.length} teams`);
        console.log(`Found ${scheduleData.totalGames} games`);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Constructor Options

```javascript
// Use default MLB Stats API host
const mlbStats = new MLBStatsAPI();

// Use custom host (for testing or alternative endpoints)
const mlbStats = new MLBStatsAPI('https://custom-api.example.com/api/');
```

## Making Requests

Each method accepts an options object with the following properties:

- **`params`** - Query parameters (optional)
- **`pathParams`** - Path parameters for endpoints that require them (like game IDs, team IDs, etc.)

### Basic Usage

```javascript
// Simple request with no parameters
const awards = await mlbStats.getAwards();

// Request with query parameters
const teams = await mlbStats.getTeams({ 
    params: { 
        sportId: 1, 
        season: 2024 
    } 
});

// Request with path parameters
const team = await mlbStats.getTeam({ 
    pathParams: { teamId: 111 } 
});

// Request with both path and query parameters
const teamRoster = await mlbStats.getTeamRoster({ 
    pathParams: { teamId: 111 },
    params: { rosterType: 'active' }
});
```

## Available Endpoints

### Teams
```javascript
// Get all teams
await mlbStats.getTeams({ params: { sportId: 1 } });

// Get specific team
await mlbStats.getTeam({ pathParams: { teamId: 111 } });

// Get team roster
await mlbStats.getTeamRoster({ pathParams: { teamId: 111 } });

// Get team stats
await mlbStats.getTeamsStats();

// Get team history
await mlbStats.getTeamsHistory();
```

### Games
```javascript
// Get live game feed
await mlbStats.getGameFeed({ pathParams: { gamePk: 634197 } });

// Get game boxscore
await mlbStats.getGameBoxscore({ pathParams: { gamePk: 634197 } });

// Get game linescore
await mlbStats.getGameLinescore({ pathParams: { gamePk: 634197 } });

// Get play-by-play
await mlbStats.getGamePlayByPlay({ pathParams: { gamePk: 634197 } });
```

### Schedule
```javascript
// Get today's games
await mlbStats.getSchedule({ 
    params: { 
        sportId: 1, 
        date: '2024-07-01' 
    } 
});

// Get date range
await mlbStats.getSchedule({ 
    params: { 
        sportId: 1, 
        startDate: '2024-07-01',
        endDate: '2024-07-07'
    } 
});

// Get postseason schedule
await mlbStats.getSchedulePostseason();
```

### Players
```javascript
// Get people/players
await mlbStats.getPeople({ params: { personIds: '660271' } });

// Get specific person
await mlbStats.getPerson({ pathParams: { personId: 660271 } });

// Get player stats for specific game
await mlbStats.getPersonStats({ 
    pathParams: { 
        personId: 660271, 
        gamePk: 634197 
    } 
});
```

### Standings
```javascript
// Get current standings
await mlbStats.getStandings({ params: { leagueId: 103 } });

// Get standings for specific date
await mlbStats.getStandings({ 
    params: { 
        leagueId: 103, 
        date: '2024-07-01' 
    } 
});
```

### Stats
```javascript
// Get stat leaders
await mlbStats.getStatsLeaders({ 
    params: { 
        leaderCategories: 'homeRuns',
        season: 2024 
    } 
});

// Get stats
await mlbStats.getStats({ 
    params: { 
        stats: 'season',
        group: 'hitting',
        season: 2024 
    } 
});
```

## Response Format

All API responses follow this structure:

```typescript
interface APIResponse {
    status: number;          // HTTP status code
    statusText: string;      // HTTP status message
    headers: object;         // Response headers
    data: any;              // Parsed JSON response data
    json(): Promise<any>;   // Method to get JSON data
    text(): Promise<string>; // Method to get raw text
}
```

### Example Response Handling

```javascript
const response = await mlbStats.getTeams({ params: { sportId: 1 } });

console.log('Status:', response.status);           // 200
console.log('Teams:', response.data.teams);        // Array of team objects
console.log('Headers:', response.headers);         // Response headers

// Alternative ways to access data
const jsonData = await response.json();            // Same as response.data
const rawText = await response.text();             // Raw response text
```

## Error Handling

The library throws errors for failed requests that you should handle:

```javascript
try {
    const response = await mlbStats.getGameFeed({ 
        pathParams: { gamePk: 'invalid-id' } 
    });
    console.log(response.data);
} catch (error) {
    console.error('Request failed:', error.message);
    
    if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
    }
}
```

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Check code style
npm run lint

# Fix code style issues
npm run lint:fix
```

## TypeScript Support

This package includes comprehensive TypeScript definitions. Import types as needed:

```typescript
import type { 
    TeamsResponse, 
    GameFeedResponse, 
    ScheduleResponse,
    Team,
    Game,
    Player 
} from 'mlb-stats-api/types';
```

## API Documentation

For detailed information about available parameters and response formats, see the [Official MLB Stats API Documentation](https://statsapi.mlb.com/docs/).

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.