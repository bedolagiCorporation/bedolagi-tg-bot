import * as fs from 'fs';
import * as path from 'path';

/**
 * stats.ts - Is using for saving some data without using 
 *            SQL/NOSQL databases (like counts, user data).
 */

// Name of folder, where we should save files
const statsFolder = 'stats'

/**
 * Contains statistic data for saving.
 */
export interface StatsData {
    filename: string
    data: any
}

/**
 * Save statistic data into file
 * @param stats Save data
 */
export function save(stats: StatsData) {

}
