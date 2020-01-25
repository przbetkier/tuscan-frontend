import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {OverallStats} from '@models/overall-stats.model';
import {isNullOrUndefined} from 'util';
import {PlayerStats} from '@models/player-stats.model';
import {Player} from '@models/player.model';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.css']
})
export class OverallStatsComponent implements OnChanges {

  @Input() player: Player;
  @Input() playerStats: PlayerStats;
  public overall: OverallStats;

  ngOnChanges() {
    if (this.hasData()) {
      this.overall = this.playerStats.overallStats;
    }
  }

  public hasData(): boolean {
    return !isNullOrUndefined(this.playerStats) && !isNullOrUndefined(this.playerStats.overallStats);
  }
}
