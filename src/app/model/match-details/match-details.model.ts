import {Team} from './team.model';

export class MatchDetails {
  constructor(public matchId: string,
              public map: string,
              public score: string,
              public result: string,
              public teams: Team[],
              public demoUrl: string,
              public demoStatus: string) {}
}
