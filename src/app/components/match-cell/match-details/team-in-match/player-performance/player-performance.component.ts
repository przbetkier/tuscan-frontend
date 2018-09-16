import {Component, Input, OnInit} from '@angular/core';
import {PlayerMatchModel} from '../../../../../model/match-details/player-match.model';

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.component.html',
  styleUrls: ['./player-performance.component.css']
})
export class PlayerPerformanceComponent implements OnInit {

  @Input() public player: PlayerMatchModel;

  constructor() { }

  ngOnInit() {
  }

}
