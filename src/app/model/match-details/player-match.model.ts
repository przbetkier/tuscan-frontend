import {PlayerMatchStats} from './player-match-stats.model';

export class PlayerMatchModel {
  constructor(public nickname: string,
              public playerId: string,
              public playerStats: PlayerMatchStats) {}
}
