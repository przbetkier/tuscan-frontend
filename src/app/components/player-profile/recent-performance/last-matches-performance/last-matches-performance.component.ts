import {Component, Input, OnInit} from '@angular/core';
import {PlayerMatchModel} from '@models/match-details/player-match.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-last-matches-performance',
  templateUrl: './last-matches-performance.component.html',
  styleUrls: ['./last-matches-performance.component.css']
})
export class LastMatchesPerformanceComponent implements OnInit {

  @Input() wins: number;
  @Input() playerModels: PlayerMatchModel[];

  public loading = true;
  public killsPerMatchAvg = 0;
  public hsPercentageAvg = 0;
  public kdRatioAvg = 0;
  public mvps = 0;
  public tripleKills = 0;
  public quadroKills = 0;
  public pentaKills = 0;
  public assistsAvg = 0;

  ngOnInit() {
    if (!isNullOrUndefined(this.playerModels)) {
      this.playerModels.forEach(m => {
        this.hsPercentageAvg = this.hsPercentageAvg + m.playerStats.headshotPercentage;
        this.kdRatioAvg = this.kdRatioAvg + m.playerStats.kdRatio;
        this.killsPerMatchAvg = this.killsPerMatchAvg + m.playerStats.kills;
        this.mvps = this.mvps + m.playerStats.mvps;
        this.tripleKills = this.tripleKills + m.playerStats.tripleKills;
        this.quadroKills = this.quadroKills + m.playerStats.quadroKills;
        this.pentaKills = this.pentaKills + m.playerStats.pentaKills;
        this.assistsAvg = this.assistsAvg + m.playerStats.assists;
      });
    }
    this.loading = false;
  }
}
