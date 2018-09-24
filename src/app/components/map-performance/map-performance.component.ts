import {Component, Input, OnInit} from '@angular/core';
import {Performance} from '../../model/performance.model';

@Component({
  selector: 'app-map-performance',
  templateUrl: './map-performance.component.html',
  styleUrls: ['./map-performance.component.css']
})
export class MapPerformanceComponent implements OnInit {

  @Input() performance: Performance;

  constructor() { }

  ngOnInit() {
  }

}
