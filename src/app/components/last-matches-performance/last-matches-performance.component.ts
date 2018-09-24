import {Component, Input, OnInit} from '@angular/core';
import {PlayerMatchModel} from '../../model/match-details/player-match.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-last-matches-performance',
  templateUrl: './last-matches-performance.component.html',
  styleUrls: ['./last-matches-performance.component.css']
})
export class LastMatchesPerformanceComponent implements OnInit {

  @Input() nickname: string;
  @Input() wins: number;
  @Input() playerModels: PlayerMatchModel[];
  @Input() eloGained: number;

  public loading = true;
  public killsPerMatchAvg = 0;
  public hsPercentageAvg = 0;
  public kdRatioAvg = 0;
  public mvps = 0;
  public tripleKills = 0;
  public quadroKills = 0;
  public pentaKills = 0;
  public assistsAvg = 0;

  constructor() {
  }

  ngOnInit() {

    if (!isNullOrUndefined(this.playerModels)) {
      for (let index = 0; index < this.playerModels.length; index++) {
        this.hsPercentageAvg = this.hsPercentageAvg + this.playerModels[index].playerStats.headshotPercentage;
        this.kdRatioAvg = this.kdRatioAvg + this.playerModels[index].playerStats.kdRatio;
        this.killsPerMatchAvg = this.killsPerMatchAvg + this.playerModels[index].playerStats.kills;
        this.mvps = this.mvps + this.playerModels[index].playerStats.mvps;
        this.tripleKills = this.tripleKills + this.playerModels[index].playerStats.tripleKills;
        this.quadroKills = this.quadroKills + this.playerModels[index].playerStats.quadroKills;
        this.pentaKills = this.pentaKills + this.playerModels[index].playerStats.pentaKills;
        this.assistsAvg = this.assistsAvg + this.playerModels[index].playerStats.assists
      }
    }
    this.loading = false;
  }
}
