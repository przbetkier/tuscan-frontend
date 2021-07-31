import {Component, Input, OnInit} from '@angular/core';
import {MapStats} from '@models/map-stats.model';

@Component({
  selector: 'app-kd-block-chart',
  templateUrl: './kd-block-chart.component.html',
  styleUrls: ['./kd-block-chart.component.css']
})
export class KdBlockChartComponent implements OnInit {

  @Input() mapStats: MapStats[];

  single = [];

  colorScheme = {
    domain: ['#e64a19', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A', '#FFEB3B', '#FF9800', '#602147']
  };

  max = 0;
  min = 0;

  ngOnInit() {
    this.mapStats = this.sortMapStats();

    this.single = this.mapStats.map((m) => {
      return {
        name: m.csgoMap.toLowerCase(),
        value: m.kdRatio
      };
    });

    this.max = this.mapStats.reduce((p, c) => p.kdRatio > c.kdRatio ? p : c).kdRatio * 1.05;
    this.min = this.getMin();
  }

  private getMin(): number {
    return this.mapStats.reduce((p, c) => p.kdRatio < c.kdRatio ? p : c).kdRatio * 0.95;
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
