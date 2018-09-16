import {GameDetails} from './game-details.model'

export class Player {
  constructor(public playerId: string,
              public nickname: string,
              public gameDetails: GameDetails,
              public avatarUrl: string,
              public country: string) {}
}
