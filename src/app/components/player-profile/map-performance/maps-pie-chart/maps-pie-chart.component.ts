import {Component, Input, OnInit} from '@angular/core';
import {MapStats} from '@models/map-stats.model';

@Component({
  selector: 'app-maps-pie-chart',
  templateUrl: './maps-pie-chart.component.html',
  styleUrls: ['./maps-pie-chart.component.css']
})
export class MapsPieChartComponent implements OnInit {

  @Input() mapStats: MapStats[];

  single = [];

  colorScheme = {
    domain: ['#2E86C1', '#5AA454', '#A10A28', '#C7B42C', '#ff7f19', '#5AD3D1', '#51b2e8', '#346417', '#5D6D7E', '#d2b48c', '#FDB45C']
  };

  ngOnInit() {
    this.mapStats = this.sortMapStats();
    this.single = this.mapStats.map(m => {
      return {name: m.csgoMap, value: m.matches};
    });
  }

  private sortMapStats() {
    return this.mapStats.sort((n1, n2) => {
      if (n1.matches > n2.matches) {
        return 1;
      }
      if (n1.matches < n2.matches) {
        return -1;
      }
      return 0;
    });
  }
}
