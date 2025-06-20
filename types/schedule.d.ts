import { Game } from './common';

export interface ScheduleResponse {
    copyright: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    dates: ScheduleDate[];
}

export interface ScheduleDate {
    date: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    games: Game[];
    events: any[];
}

export interface PostseasonScheduleResponse {
    copyright: string;
    rounds: PostseasonRound[];
}

export interface PostseasonRound {
    round: string;
    name: string;
    description?: string;
    series: PostseasonSeries[];
}

export interface PostseasonSeries {
    seriesNumber: number;
    seriesDescription: string;
    gamesInSeries: number;
    currentGameNumber: number;
    isOver: boolean;
    currentLeader?: {
        team: {
            id: number;
            name: string;
            link: string;
        };
        wins: number;
    };
    games: PostseasonGame[];
}

export interface PostseasonGame {
    gamePk: number;
    gameNumber: number;
    link: string;
    gameDate: string;
    status: {
        abstractGameState: string;
        codedGameState: string;
        detailedState: string;
        statusCode: string;
        abstractGameCode: string;
    };
    teams: {
        away: {
            team: {
                id: number;
                name: string;
                link: string;
            };
            isWinner?: boolean;
            splitSquad?: boolean;
            seriesNumber?: number;
        };
        home: {
            team: {
                id: number;
                name: string;
                link: string;
            };
            isWinner?: boolean;
            splitSquad?: boolean;
            seriesNumber?: number;
        };
    };
    venue: {
        id: number;
        name: string;
        link: string;
    };
}