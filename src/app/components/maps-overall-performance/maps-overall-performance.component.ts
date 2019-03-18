import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MapStats} from '../../model/map-stats.model';

@Component({
  selector: 'app-maps-overall-performance',
  templateUrl: './maps-overall-performance.component.html',
  styleUrls: ['./maps-overall-performance.component.css']
})
export class MapsOverallPerformanceComponent implements OnInit {

  @Input() mapStats: MapStats[];
  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}
