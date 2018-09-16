import {PlayerMatchStats} from './player-match-stats.model';

export class PlayerMatchModel {
  constructor(public nickname: string,
              public playerStats: PlayerMatchStats) {}
}
