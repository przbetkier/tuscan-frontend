export class SimplePlayer {
  constructor(public nickname: string,
              lvl: number,
              country: string,
              avatarUrl: string,
              verified: boolean) {
  }
}

export class PlayersSearched {
  constructor(public players: SimplePlayer[]) {}
}
