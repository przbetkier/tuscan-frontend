import {Component, Input, OnInit} from '@angular/core';
import {PlayerMatchModel} from '../../../../model/match-details/player-match.model';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.component.html',
  styleUrls: ['./player-performance.component.css']
})
export class PlayerPerformanceComponent implements OnInit {

  public nickname: string;
  public isCheckedPlayer: boolean;

  @Input() public player: PlayerMatchModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.nickname = params.get('nickname');
    });
  }

  ngOnInit() {
    this.checkPlayer();
  }

  public checkPlayer() {
    this.isCheckedPlayer = this.player.nickname === this.nickname;
  }

}
