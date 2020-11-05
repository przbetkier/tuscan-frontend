import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerHistory} from '@models/player-history.model';

@Component({
  selector: 'app-elo-history-chart',
  templateUrl: './elo-history-chart.component.html',
  styleUrls: ['./elo-history-chart.component.css']
})
export class EloHistoryChartComponent implements OnInit {

  @Input() playerHistory: PlayerHistory;
  @Output() whenLabelChanged = new EventEmitter<any>();

  public primaryColor = '#e64a19';
  public eloHistory: PlayerHistory;
  public kdHistory: PlayerHistory;
  public hsHistory: PlayerHistory;
  public chartType = 'line';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.11)',
      borderColor: this.primaryColor,
      borderWidth: 1,
      pointBackgroundColor: this.primaryColor,
      pointBorderColor: this.primaryColor,
      pointHoverBackgroundColor: this.primaryColor,
      pointHoverBorderColor: this.primaryColor
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
          fontFamily: 'Quantico, sans-serif'
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
        },
        ticks: {
          fontColor: '#fcfffa',
          fontFamily: 'Quantico, sans-serif'
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
    this.kdHistory = new PlayerHistory((this.playerHistory.matchHistory.slice(0, 20)));
    this.hsHistory = this.kdHistory;
    this.eloHistory = new PlayerHistory(this.playerHistory.matchHistory.filter(m => m.eloDiff !== 0).slice(0, 20));
    this.setEloAsDataset();
  }

  getLabels(datasetLength: number) {
    // FIXME: Move it to the configuration
    const historySize = datasetLength;
    const labels = [];
    for (let i = 0; i < historySize; i++) {
      const label = `${i + 1}`;
      labels.push(label);
    }
    return labels.reverse();
  }

  setKdRatioAsDataset() {
    const data = this.kdHistory.matchHistory.map(m => m.kdRatio).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('K/D');
    this.chartLabels = this.getLabels(data.length);
  }

  setEloAsDataset() {
    const data = this.eloHistory.matchHistory.map(m => m.elo).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('ELO');
    this.chartLabels = this.getLabels(data.length);
  }

  setHsAsDataset() {
    const data = this.hsHistory.matchHistory.map(m => m.hsPercentage).reverse();
    this.chartDatasets = [
      {data: data}
    ];
    this.whenLabelChanged.emit('HS%');
    this.chartLabels = this.getLabels(data.length);
  }
}

