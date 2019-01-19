import {Component, Input, OnInit} from '@angular/core';
import {MapStats} from '../../model/map-stats.model';

@Component({
  selector: 'app-kd-block-chart',
  templateUrl: './kd-block-chart.component.html',
  styleUrls: ['./kd-block-chart.component.css']
})
export class KdBlockChartComponent implements OnInit {

  @Input() mapStats: MapStats[];

  public chartType = 'bar';
  public dataset: Array<any>;
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F44336', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A', '#FFEB3B', '#FF9800', '#602147'],
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
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
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 11
      }
    },
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    this.mapStats = this.sortMapStats();
    this.dataset = this.mapStats.map(m => m.kdRatio);
    this.chartDatasets = [{data: this.dataset, label: 'K/D'}];
    this.chartLabels = this.mapStats.map(m => m.csgoMap.toLowerCase());
  }

  private sortMapStats() {
    return this.mapStats.sort((n1, n2) => {
      if (n1.kdRatio > n2.kdRatio) {
        return -1;
      }
      if (n1.kdRatio < n2.kdRatio) {
        return 1;
      }
      return 0;
    });
  }
}
