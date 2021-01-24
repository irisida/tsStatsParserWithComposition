import { MatchResult } from './MatchResult';

/**
 * tuple of the types we want for a row in matches
 */
export type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];
