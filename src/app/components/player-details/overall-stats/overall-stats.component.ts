import {Component, Input, OnInit} from '@angular/core';
import {OverallStats} from '../../../model/overall-stats.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.css']
})
export class OverallStatsComponent implements OnInit {

  @Input() overallStats: OverallStats;

  ngOnInit() {
  }

  public hasData(): boolean {
    return !isNullOrUndefined(this.overallStats);
  }

}
