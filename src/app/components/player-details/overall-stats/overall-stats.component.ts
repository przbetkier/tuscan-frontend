import {Component, Input, OnInit} from '@angular/core';
import {OverallStats} from '../../../model/overall-stats.model';
import {isNullOrUndefined} from 'util';
import {Performance} from '../../../model/performance.model';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.css']
})
export class OverallStatsComponent implements OnInit {

  @Input() overallStats: OverallStats;
  public performance: Performance;

  ngOnInit() {
    this.performance = this.overallStats.performance;
  }

  public hasData(): boolean {
    return !isNullOrUndefined(this.overallStats);
  }
}
