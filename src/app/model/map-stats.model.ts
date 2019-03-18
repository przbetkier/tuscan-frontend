export class MapStats {
  constructor(public csgoMap: string,
              public matches: number,
              public kdRatio: number,
              public winPercentage: number,
              public wins: number,
              public hsPercentage: number,
              public averageKills: number,
              public tripleKills: number,
              public quadroKills: number,
              public pentaKills: number) {
  }
}
