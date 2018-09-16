import {TeamStats} from './team-stats.model';
import {PlayerMatchModel} from './player-match.model';

export class Team {
  constructor(public teamId: string,
              public teamStats: TeamStats,
              public players: PlayerMatchModel[]) {}
}
