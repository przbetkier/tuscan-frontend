import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MapStats} from '@models/map-stats.model';

@Component({
  selector: 'app-maps-pie-chart',
  templateUrl: './maps-pie-chart.component.html',
  styleUrls: ['./maps-pie-chart.component.css']
})
export class MapsPieChartComponent implements OnInit {

  @Input() mapStats: MapStats[];

  public innerWidth: any;

  public chartType = 'pie';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartColors: Array<any> = [
    {
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 1,
      pointBackgroundColor: '#e64a19',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      backgroundColor: ['#ff7f19', '#5AD3D1', '#51b2e8', '#346417', '#5D6D7E', '#d2b48c', '#FDB45C', '#2E86C1'],
      hoverBackgroundColor: ['#C46219', '#51A19F', '#407aa8', '#205316', '#616774']
    }
  ];

  public chartOptions: any = {
    legend: {
      position: 'bottom',

      labels: {
        fontColor: 'white',
        fontSize: 11,
        fontFamily: 'Quantico, sans-serif'
      }
    },
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.mapStats = this.sortMapStats();
    const data = this.mapStats.map(m => m.matches);
    this.chartDatasets = [
      {data: data, label: 'Maps distribution'}
    ];
    this.chartLabels = this.getLabels();
  }

  getLabels() {
    return this.mapStats.map(m => `${m.csgoMap.toLowerCase()} (${m.matches})`);
  }

  private sortMapStats() {
    return this.mapStats.sort((n1, n2) => {
      if (n1.matches > n2.matches) {
        return -1;
      }
      if (n1.matches < n2.matches) {
        return 1;
      }
      return 0;
    });
  }

  showLegend() {
    return this.innerWidth > 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}
