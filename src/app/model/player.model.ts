import {GameDetails} from './game-details.model';
import {BanInfo} from './ban-info.model';

export class Player {
  constructor(public playerId: string,
              public nickname: string,
              public gameDetails: GameDetails,
              public avatarUrl: string,
              public country: string,
              public membership: string,
              public ban: BanInfo) {}
}
