import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chart} from 'chart.js';
import {PlayerHistory} from '../../model/player-history.model';

@Component({
  selector: 'app-elo-history-chart',
  templateUrl: './elo-history-chart.component.html',
  styleUrls: ['./elo-history-chart.component.css']
})
export class EloHistoryChartComponent implements OnInit {

  @Input() playerHistory: PlayerHistory;
  @Output() whenLabelChanged = new EventEmitter<any>();

  public chartType = 'line';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.11)',
      borderColor: '#ec8a09',
      borderWidth: 1,
      pointBackgroundColor: '#ad5b09',
      pointBorderColor: '#ad5b09',
      pointHoverBackgroundColor: '#ad5b09',
      pointHoverBorderColor: '#ad5b09'
    }
  ];

  public chartOptions: any = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: '#fcfffa',
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
        },
        ticks: {
          fontColor: '#fcfffa',
        },
      }],
    },
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    this.setEloAsDataset();
    this.chartLabels = this.getLabels();
  }

  getLabels() {
    const historySize = this.playerHistory.matchHistory.length;
    const labels = [];
    for (let i = 0; i < historySize; i++) {
      const label = `${i + 1}`;
      labels.push(label);
    }
    return labels.reverse();
  }

  setKdRatioAsDataset() {
    const data = this.playerHistory.matchHistory.map(m => m.kdRatio).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('K/D');
  }

  setEloAsDataset() {
    const data = this.playerHistory.matchHistory.map(m => m.elo).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('ELO');
  }

  setHsAsDataset() {
    const data = this.playerHistory.matchHistory.map(m => m.hsPercentage).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('HS%');
  }
}

