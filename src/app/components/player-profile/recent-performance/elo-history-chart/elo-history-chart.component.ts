import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerHistory} from '@models/player-history.model';
import {curveCardinal} from 'd3-shape';

@Component({
  selector: 'app-elo-history-chart',
  templateUrl: './elo-history-chart.component.html',
  styleUrls: ['./elo-history-chart.component.css']
})
export class EloHistoryChartComponent implements OnInit {

  @Input() playerHistory: PlayerHistory;
  @Output() whenLabelChanged = new EventEmitter<any>();

  public curve: any = curveCardinal;
  public simple = [];

  colorScheme = {
    domain: ['#e64a19']
  };

  view: any[] = [];

  public eloHistory: PlayerHistory;
  public kdHistory: PlayerHistory;
  public hsHistory: PlayerHistory;

  ngOnInit() {
    this.kdHistory = new PlayerHistory((this.playerHistory.matchHistory.slice(0, 20)));
    this.hsHistory = this.kdHistory;
    this.eloHistory = new PlayerHistory(this.playerHistory.matchHistory.filter(m => m.eloDiff !== 0).slice(0, 20));
    this.setEloAsDataset();
  }

  setKdRatioAsDataset() {
    const series = this.eloHistory.matchHistory.map((m, idx) => {
      return {
        name: `${idx + 1}`, value: m.kdRatio
      };
    }).reverse();
    this.simple = [{
      name: 'KD',
      series: series
    }];
    this.whenLabelChanged.emit('K/D');
  }

  setEloAsDataset() {
    const series = this.eloHistory.matchHistory.map((m, idx) => {
      return {
        name: `${idx + 1}`, value: m.elo
      };
    }).reverse();
    this.simple = [{
      name: 'Elo',
      series: series
    }];
    this.whenLabelChanged.emit('ELO');
  }

  setHsAsDataset() {
    const series = this.eloHistory.matchHistory.map((m, idx) => {
      return {
        name: `${idx + 1}`, value: m.hsPercentage
      };
    }).reverse();
    this.simple = [{
      name: 'HS%',
      series: series
    }];

    this.whenLabelChanged.emit('HS%');
  }

  changeData(val: any) {
    switch (val.value) {
      case 'KD':
        this.setKdRatioAsDataset();
        break;
      case 'HS%':
        this.setHsAsDataset();
        break;
      default:
        this.setEloAsDataset();
        break;
    }
  }
}

