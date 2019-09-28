export class MatchHistory {
  constructor(public matchId: string,
              public date: Date,
              public elo: number,
              public eloDiff: number,
              public kdRatio: number,
              public hsPercentage: number) {
  }
}
