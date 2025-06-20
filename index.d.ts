declare class MLBStatsAPI {
    constructor(host?: string);
    
    readonly host: string;
    readonly apiHost: string;

    // Common types for parameters
    getAttendance(args?: AttendanceParams): Promise<APIResponse>;
    getAwards(args?: BaseParams): Promise<APIResponse>;
    getConferences(args?: BaseParams): Promise<APIResponse>;
    getDivisions(args?: BaseParams): Promise<APIResponse>;
    getDraft(args?: BaseParams): Promise<APIResponse>;
    
    // Game endpoints
    getGameFeed(args: GamePathParams): Promise<APIResponse>;
    getGameDiffPatch(args: GamePathParams): Promise<APIResponse>;
    getGameTimestamps(args: GamePathParams): Promise<APIResponse>;
    getGameChanges(args?: GameChangesParams): Promise<APIResponse>;
    getGameContextMetrics(args: GamePathParams): Promise<APIResponse>;
    getGameWinProbability(args: GamePathParams): Promise<APIResponse>;
    getGameBoxscore(args: GamePathParams): Promise<APIResponse>;
    getGameContent(args: GamePathParams): Promise<APIResponse>;
    getGameColor(args: GamePathParams): Promise<APIResponse>;
    getGameColorDiff(args: GamePathParams): Promise<APIResponse>;
    getGameColorTimestamps(args: GamePathParams): Promise<APIResponse>;
    getGameLinescore(args: GamePathParams): Promise<APIResponse>;
    getGamePlayByPlay(args: GamePathParams): Promise<APIResponse>;
    getGamePace(args?: BaseParams): Promise<APIResponse>;
    
    // High/Low
    getHighLow(args: HighLowParams): Promise<APIResponse>;
    
    // Home Run Derby
    getHomeRunDerby(args: GamePathParams): Promise<APIResponse>;
    
    // League endpoints
    getLeague(args?: LeagueParams): Promise<APIResponse>;
    getLeagueAllStarBallot(args: LeaguePathParams): Promise<APIResponse>;
    getLeagueAllStarWriteIns(args: LeaguePathParams): Promise<APIResponse>;
    getLeagueAllStarFinalVote(args: LeaguePathParams): Promise<APIResponse>;
    
    // People endpoints
    getPeople(args?: PeopleParams): Promise<APIResponse>;
    getPeopleChanges(args?: BaseParams): Promise<APIResponse>;
    getPeopleFreeAgents(args?: BaseParams): Promise<APIResponse>;
    getPerson(args: PersonPathParams): Promise<APIResponse>;
    getPersonStats(args: PersonStatsParams): Promise<APIResponse>;
    
    // Jobs endpoints
    getJobs(args?: BaseParams): Promise<APIResponse>;
    getJobsUmpires(args?: BaseParams): Promise<APIResponse>;
    getJobsUmpiresGames(args: UmpirePathParams): Promise<APIResponse>;
    getJobsDatacasters(args?: BaseParams): Promise<APIResponse>;
    getJobsOfficialScorers(args?: BaseParams): Promise<APIResponse>;
    
    // Schedule endpoints
    getSchedule(args?: ScheduleParams): Promise<APIResponse>;
    getScheduleTied(args?: BaseParams): Promise<APIResponse>;
    getSchedulePostseason(args?: BaseParams): Promise<APIResponse>;
    getSchedulePostseasonSeries(args?: BaseParams): Promise<APIResponse>;
    getSchedulePostseasonTuneIn(args?: BaseParams): Promise<APIResponse>;
    
    // Seasons endpoints
    getSeasons(args?: SeasonsParams): Promise<APIResponse>;
    getSeason(args: SeasonPathParams): Promise<APIResponse>;
    
    // Sports endpoints
    getSports(args?: BaseParams): Promise<APIResponse>;
    getSportsPlayers(args: SportPathParams): Promise<APIResponse>;
    
    // Standings
    getStandings(args?: StandingsParams): Promise<APIResponse>;
    
    // Stats endpoints
    getStats(args?: StatsParams): Promise<APIResponse>;
    getStatsLeaders(args?: StatsLeadersParams): Promise<APIResponse>;
    getStatsStreaks(args?: StatsStreaksParams): Promise<APIResponse>;
    
    // Teams endpoints
    getTeams(args?: TeamsParams): Promise<APIResponse>;
    getTeamsHistory(args?: BaseParams): Promise<APIResponse>;
    getTeamsStats(args?: BaseParams): Promise<APIResponse>;
    getTeamsAffiliates(args?: BaseParams): Promise<APIResponse>;
    getTeam(args: TeamPathParams): Promise<APIResponse>;
    getTeamAlumni(args: TeamPathParams): Promise<APIResponse>;
    getTeamCoaches(args: TeamPathParams): Promise<APIResponse>;
    getTeamPersonnel(args: TeamPathParams): Promise<APIResponse>;
    getTeamLeaders(args: TeamPathParams): Promise<APIResponse>;
    getTeamRoster(args: TeamPathParams): Promise<APIResponse>;
    
    // Venues endpoints
    getVenues(args?: VenuesParams): Promise<APIResponse>;
    getVenue(args: VenuePathParams): Promise<APIResponse>;
    
    // Transactions endpoints
    getTransactions(args?: TransactionsParams): Promise<APIResponse>;
    
    // Broadcasts endpoints
    getBroadcasts(args?: BroadcastsParams): Promise<APIResponse>;
    
    // Game Types endpoints
    getGameTypes(args?: BaseParams): Promise<APIResponse>;
    
    // Roster Types endpoints
    getRosterTypes(args?: BaseParams): Promise<APIResponse>;
}

// Base interfaces
interface BaseParams {
    params?: Record<string, any>;
}

interface PathParams<T> extends BaseParams {
    pathParams: T;
}

// Response type
interface APIResponse {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    data: any;
    json(): Promise<any>;
    text(): Promise<string>;
}

// Specific parameter types
interface AttendanceParams extends BaseParams {
    params?: {
        teamId?: number;
        leagueId?: number | string;
        leagueListId?: string;
    };
}

interface GamePathParams extends PathParams<{ gamePk: number | string }> {}

interface GameChangesParams extends BaseParams {
    params?: {
        updatedSince?: number;
    };
}

interface HighLowParams extends PathParams<{ orgType: string }> {
    params?: {
        sortStat?: string;
        season?: number;
    };
}

interface LeagueParams extends BaseParams {
    params?: {
        sportId?: number;
        leagueIds?: number | string;
    };
}

interface LeaguePathParams extends PathParams<{ leagueId: number | string }> {}

interface PeopleParams extends BaseParams {
    params?: {
        personIds?: string;
    };
}

interface PersonPathParams extends PathParams<{ personId: number | string }> {}

interface PersonStatsParams extends PathParams<{ personId: number | string; gamePk: number | string }> {}

interface UmpirePathParams extends PathParams<{ umpireId: number | string }> {}

interface ScheduleParams extends BaseParams {
    params?: {
        sportId?: number;
        date?: string;
        startDate?: string;
        endDate?: string;
        teamId?: number;
        gameTypes?: string;
    };
}

interface SeasonsParams extends BaseParams {
    params?: {
        sportId?: number;
        all?: boolean;
    };
}

interface SeasonPathParams extends PathParams<{ seasonId: number | string }> {}

interface SportPathParams extends PathParams<{ sportId: number | string }> {}

interface StandingsParams extends BaseParams {
    params?: {
        leagueId?: number | string;
        season?: number;
        date?: string;
    };
}

interface StatsParams extends BaseParams {
    params?: {
        stats?: string;
        group?: string;
        season?: number;
        gameTypes?: string;
    };
}

interface StatsLeadersParams extends BaseParams {
    params?: {
        leaderCategories?: string;
        season?: number;
        leaderGameTypes?: string;
    };
}

interface StatsStreaksParams extends BaseParams {
    params?: {
        streakType?: string;
        streakLimit?: number;
        season?: number;
        gameTypes?: string;
    };
}

interface TeamsParams extends BaseParams {
    params?: {
        sportId?: number;
        leagueIds?: string;
        season?: number;
    };
}

interface TeamPathParams extends PathParams<{ teamId: number | string }> {}

interface VenuesParams extends BaseParams {
    params?: {
        venueIds?: string;
    };
}

interface VenuePathParams extends PathParams<{ venueId: number | string }> {}

interface TransactionsParams extends BaseParams {
    params?: {
        teamId?: number;
        playerId?: number;
        startDate?: string;
        endDate?: string;
    };
}

interface BroadcastsParams extends BaseParams {
    params?: {
        sportId?: number;
        date?: string;
        teamId?: number;
    };
}

export = MLBStatsAPI;

// Re-export types
export * from './types';