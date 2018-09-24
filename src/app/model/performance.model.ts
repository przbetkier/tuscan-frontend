import {SoloPerformance} from './solo-performance.model';
import {TeamPerformance} from './team-performance.model';

export class Performance {
  constructor(public bestSoloPerformance: SoloPerformance,
              public bestTeamPerformance: TeamPerformance,
              public worstSoloPerformance: SoloPerformance,
              public worstTeamPerformance: TeamPerformance) {
  }
}
