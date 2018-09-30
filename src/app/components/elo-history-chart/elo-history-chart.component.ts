import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {PlayerHistory} from '../../model/player-history.model';

@Component({
  selector: 'app-elo-history-chart',
  templateUrl: './elo-history-chart.component.html',
  styleUrls: ['./elo-history-chart.component.css']
})
export class EloHistoryChartComponent implements OnInit {

  @Input() playerHistory: PlayerHistory;

  public chartType = 'line';

  public chartDatasets: Array<any>;

  public chartLabels: Array<any>;

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(153, 153, 153, 0.83)',
      borderWidth: 2,
      pointBackgroundColor: '#ad5b09',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    const data = this.playerHistory.matchHistory.map(m => m.elo).reverse();
    this.chartDatasets = [
      {data: data, label: 'Your ELO history'}
    ];
    this.chartLabels = this.getLabels();
  }

  getLabels() {
    const historySize = this.playerHistory.matchHistory.length;
    const labels = [];
    for (let i = 0; i < historySize; i++) {
      const label = `${i + 1}`;
      labels.push(label);
    }
    return labels;
  }
}

