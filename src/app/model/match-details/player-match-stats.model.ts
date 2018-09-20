export class PlayerMatchStats {
  constructor(public kills: number,
              public assists: number,
              public deaths: number,
              public headshots: number,
              public headshotPercentage: number,
              public kdRatio: number,
              public krRatio: number,
              public mvps: number,
              public tripleKills: number,
              public quadroKills: number,
              public pentaKills: number) {}
}
