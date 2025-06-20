export interface Team {
    id: number;
    name: string;
    link: string;
    teamName?: string;
    locationName?: string;
    abbreviation?: string;
    league?: League;
    division?: Division;
}

export interface League {
    id: number;
    name: string;
    link: string;
}

export interface Division {
    id: number;
    name: string;
    link: string;
}

export interface Player {
    id: number;
    fullName: string;
    link: string;
    firstName?: string;
    lastName?: string;
    jerseyNumber?: string;
    position?: Position;
}

export interface Position {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}

export interface Venue {
    id: number;
    name: string;
    link: string;
    location?: {
        city: string;
        state: string;
        country: string;
    };
}

export interface Game {
    gamePk: number;
    link: string;
    gameType: string;
    season: string;
    gameDate: string;
    status: GameStatus;
    teams: {
        away: GameTeam;
        home: GameTeam;
    };
    venue: Venue;
}

export interface GameStatus {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    abstractGameCode: string;
}

export interface GameTeam {
    leagueRecord: {
        wins: number;
        losses: number;
        pct: string;
    };
    score?: number;
    team: Team;
}

export interface Season {
    seasonId: string;
    hasWildcard: boolean;
    preSeasonStartDate: string;
    preSeasonEndDate: string;
    seasonStartDate: string;
    seasonEndDate: string;
    regularSeasonStartDate: string;
    regularSeasonEndDate: string;
    postSeasonStartDate?: string;
    postSeasonEndDate?: string;
}