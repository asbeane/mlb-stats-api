import { Team, Player, Venue } from './common';

export interface GameFeedResponse {
    copyright: string;
    gamePk: number;
    link: string;
    metaData: {
        wait: number;
        timeStamp: string;
        gameEvents: string[];
        logicalEvents: string[];
    };
    gameData: GameData;
    liveData: LiveData;
}

export interface GameData {
    game: {
        pk: number;
        type: string;
        doubleHeader: string;
        id: string;
        gamedayType: string;
        tiebreaker: string;
        gameNumber: number;
        calendarEventID: string;
        season: string;
        seasonDisplay: string;
    };
    datetime: {
        dateTime: string;
        originalDate: string;
        dayNight: string;
        time: string;
        ampm: string;
    };
    status: {
        abstractGameState: string;
        codedGameState: string;
        detailedState: string;
        statusCode: string;
        abstractGameCode: string;
    };
    teams: {
        away: TeamInfo;
        home: TeamInfo;
    };
    players: {
        [key: string]: Player & {
            stats?: PlayerStats;
        };
    };
    venue: Venue;
}

export interface TeamInfo {
    id: number;
    name: string;
    link: string;
    season: number;
    venue: {
        id: number;
        name: string;
        link: string;
    };
    teamCode: string;
    fileCode: string;
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    league: {
        id: number;
        name: string;
        link: string;
    };
    division: {
        id: number;
        name: string;
        link: string;
    };
}

export interface LiveData {
    plays: {
        allPlays: Play[];
        currentPlay: Play;
        scoringPlays: number[];
    };
    linescore: Linescore;
    boxscore: Boxscore;
}

export interface Play {
    result: {
        type: string;
        event: string;
        eventType: string;
        description: string;
        rbi: number;
        awayScore: number;
        homeScore: number;
    };
    about: {
        atBatIndex: number;
        halfInning: string;
        inning: number;
        endTime: string;
        isComplete: boolean;
        isScoringPlay: boolean;
        hasReview: boolean;
        hasOut: boolean;
        captivatingIndex: number;
    };
    count: {
        balls: number;
        strikes: number;
        outs: number;
    };
    matchup: {
        batter: Player;
        batSide: { code: string; description: string };
        pitcher: Player;
        pitchHand: { code: string; description: string };
        postOnFirst?: Player;
        postOnSecond?: Player;
        postOnThird?: Player;
    };
}

export interface Linescore {
    currentInning: number;
    currentInningOrdinal: string;
    inningState: string;
    inningHalf: string;
    isTopInning: boolean;
    scheduledInnings: number;
    innings: InningScore[];
    teams: {
        home: LineScoreTeam;
        away: LineScoreTeam;
    };
}

export interface InningScore {
    num: number;
    ordinalNum: string;
    home: {
        runs?: number;
        hits: number;
        errors: number;
        leftOnBase: number;
    };
    away: {
        runs?: number;
        hits: number;
        errors: number;
        leftOnBase: number;
    };
}

export interface LineScoreTeam {
    runs: number;
    hits: number;
    errors: number;
    leftOnBase: number;
}

export interface Boxscore {
    teams: {
        away: BoxscoreTeam;
        home: BoxscoreTeam;
    };
}

export interface BoxscoreTeam {
    team: Team;
    teamStats: {
        batting: TeamBattingStats;
        pitching: TeamPitchingStats;
        fielding: TeamFieldingStats;
    };
    players: {
        [key: string]: BoxscorePlayer;
    };
    batters: number[];
    pitchers: number[];
}

export interface BoxscorePlayer {
    person: Player;
    jerseyNumber: string;
    position: {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    };
    stats: {
        batting?: BattingStats;
        pitching?: PitchingStats;
        fielding?: FieldingStats;
    };
    gameStatus: {
        isCurrentBatter: boolean;
        isCurrentPitcher: boolean;
        isOnBench: boolean;
        isSubstitute: boolean;
    };
}

export interface PlayerStats {
    batting?: BattingStats;
    pitching?: PitchingStats;
    fielding?: FieldingStats;
}

export interface BattingStats {
    gamesPlayed?: number;
    atBats: number;
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
    avg: string;
    obp: string;
    slg: string;
    ops: string;
}

export interface PitchingStats {
    gamesPlayed?: number;
    gamesStarted?: number;
    wins?: number;
    losses?: number;
    saves?: number;
    saveOpportunities?: number;
    inningsPitched: string;
    hits: number;
    runs: number;
    earnedRuns: number;
    homeRuns: number;
    baseOnBalls: number;
    strikeOuts: number;
    era: string;
    whip: string;
}

export interface FieldingStats {
    gamesStarted?: number;
    assists: number;
    putOuts: number;
    errors: number;
    chances: number;
    fielding?: string;
}

export interface TeamBattingStats extends BattingStats {
    flyOuts: number;
    groundOuts: number;
    leftOnBase: number;
    sacBunts: number;
    sacFlies: number;
}

export interface TeamPitchingStats extends PitchingStats {
    groundOuts: number;
    flyOuts: number;
    battersHit: number;
    inheritedRunners: number;
    inheritedRunnersScored: number;
}

export interface TeamFieldingStats extends FieldingStats {
    doublePlays: number;
    triplePlays: number;
    passedBalls: number;
    catchersInterference: number;
}