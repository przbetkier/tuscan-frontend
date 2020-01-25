import {Component, Input, OnChanges} from '@angular/core';
import {PlayerStats} from '@models/player-stats.model';
import {Performance} from '@models/performance.model';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'app-map-performance',
  templateUrl: './map-performance.component.html',
  styleUrls: ['./map-performance.component.css']
})
export class MapPerformanceComponent implements OnChanges {

  @Input() playerStats: PlayerStats;

  performance: Performance;

  ngOnChanges() {
    if (this.hasData()) {
      this.performance = this.playerStats.overallStats.performance;
    }
  }

  hasData() {
    return !isNullOrUndefined(this.playerStats);
  }
}
