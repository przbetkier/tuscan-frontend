import {OverallStats} from './overall-stats.model';
import {MapStats} from './map-stats.model';

export class PlayerStats {
  constructor(public overallStats: OverallStats,
              public mapStats: MapStats[]) {}
}
