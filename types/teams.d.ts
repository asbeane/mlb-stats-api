import { Team, League, Division, Player, Venue } from './common';

export interface TeamsResponse {
    copyright: string;
    teams: TeamDetail[];
}

export interface TeamDetail extends Team {
    season: number;
    venue: Venue;
    springVenue?: Venue;
    teamCode: string;
    fileCode: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    league: League;
    division: Division;
    sport: {
        id: number;
        link: string;
        name: string;
    };
    shortName: string;
    parentOrgName?: string;
    parentOrgId?: number;
    franchiseName: string;
    clubName: string;
    active: boolean;
}

export interface TeamRosterResponse {
    copyright: string;
    roster: RosterEntry[];
    link: string;
    teamId: number;
    rosterType: string;
}

export interface RosterEntry {
    person: Player & {
        birthDate?: string;
        currentAge?: number;
        birthCity?: string;
        birthStateProvince?: string;
        birthCountry?: string;
        height?: string;
        weight?: number;
        active?: boolean;
        primaryNumber?: string;
        useName?: string;
        middleName?: string;
        boxscoreName?: string;
        nickName?: string;
        draftYear?: number;
        mlbDebutDate?: string;
        batSide?: {
            code: string;
            description: string;
        };
        pitchHand?: {
            code: string;
            description: string;
        };
    };
    jerseyNumber: string;
    position: {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    };
    status: {
        code: string;
        description: string;
    };
    parentTeamId?: number;
}

export interface TeamStatsResponse {
    copyright: string;
    stats: TeamStatsSplit[];
}

export interface TeamStatsSplit {
    type: {
        displayName: string;
        description: string;
    };
    group: {
        displayName: string;
    };
    exemptions?: any[];
    splits: TeamStatsSplitDetail[];
}

export interface TeamStatsSplitDetail {
    season: string;
    stat: TeamStats;
    team: Team;
    league?: League;
    sport?: {
        id: number;
        link: string;
        abbreviation: string;
    };
    gameType?: string;
}

export interface TeamStats {
    gamesPlayed: number;
    wins: number;
    losses: number;
    winningPercentage: string;
    runsScored: number;
    runsAllowed: number;
    runDifferential: number;
    
    // Batting stats
    batting?: {
        avg: string;
        obp: string;
        slg: string;
        ops: string;
        runs: number;
        hits: number;
        doubles: number;
        triples: number;
        homeRuns: number;
        rbi: number;
        baseOnBalls: number;
        strikeOuts: number;
        stolenBases: number;
        caughtStealing: number;
        leftOnBase: number;
        atBats: number;
    };
    
    // Pitching stats
    pitching?: {
        era: string;
        whip: string;
        wins: number;
        losses: number;
        saves: number;
        saveOpportunities: number;
        holds: number;
        inningsPitched: string;
        hits: number;
        runs: number;
        earnedRuns: number;
        homeRuns: number;
        baseOnBalls: number;
        strikeOuts: number;
        hitBatsmen: number;
        wildPitches: number;
        balks: number;
    };
    
    // Fielding stats
    fielding?: {
        fieldingPercentage: string;
        errors: number;
        putOuts: number;
        assists: number;
        doublePlays: number;
        triplePlays: number;
        passedBalls: number;
        stolenBases: number;
        caughtStealing: number;
        catchersInterference: number;
    };
}

export interface TeamLeadersResponse {
    copyright: string;
    teamLeaders: TeamLeaderCategory[];
}

export interface TeamLeaderCategory {
    leaderCategory: string;
    season?: string;
    gameTypes?: string[];
    leaders: TeamLeader[];
}

export interface TeamLeader {
    rank: number;
    value: string;
    team: Team;
    league?: League;
    person?: Player;
}