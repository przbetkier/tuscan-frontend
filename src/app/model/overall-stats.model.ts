import {Performance} from './performance.model';

export class OverallStats {
  constructor(public headshotPercentage: number,
              public kdRatio: number,
              public matches: number,
              public winPercentage: number,
              public performance: Performance,
              public currentWinStreak: number,
              public longestWinStreak: number) {
  }
}
