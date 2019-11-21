import {Player} from './player.model';

export class Teammate {
  constructor(public player: Player, public matchesPlayed: number) {
  }
}
