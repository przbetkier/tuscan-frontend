export class PlayerMatchStats {
  constructor(public kills: number,
              public assists: number,
              public deaths: number,
              public headshots: number,
              public headshotPercentage: number,
              public kdRatio: number,
              public krRatio: number) {}
}
