export class DemoDetails {
  constructor(public matchId: string,
              public data: PlayerDemoData[]) {
  }
}

export class PlayerDemoData {
  constructor(public nickname: string,
              public plants: number,
              public defusals: number,
              public flashed: number,
              public kills: DemoKill[],
              public deaths: DemoDeath[]) {
  }
}

export class DemoKill {
  constructor(public victim: string,
              public wb: boolean,
              public hs: boolean,
              public entry: boolean,
              public weapon: string,
              public kpos: DemoPosition,
              public vpos: DemoPosition) {
  }
}

export class DemoDeath {
  constructor(public killer: string,
              public wb: boolean,
              public hs: boolean,
              public entry: boolean,
              public weapon: string,
              public kpos: DemoPosition,
              public vpos: DemoPosition) {
  }
}

export class DemoPosition {
  constructor(public x: number, public y: number) {
  }
}

export class DemoDetailsRequest {
  constructor(public matchId: string) {
  }
}

export interface PlayerBansResponse {
  bans: PlayerBan[];
}

export interface PlayerBan {
  reason: string;
  startsAt: Date;
  endsAt: Date;
}
