import {PlayerMatchModel} from './player-match.model';

export class Team {
  constructor(public teamId: string,
              public teamName: string,
              public players: PlayerMatchModel[]) {
  }
}
