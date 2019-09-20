export class SimplePlayer {
  constructor(public nickname: string,
              public lvl: number,
              public country: string,
              public avatarUrl: string,
              public verified: boolean) {
  }
}

export class PlayersSearched {
  constructor(public players: SimplePlayer[]) {}
}
