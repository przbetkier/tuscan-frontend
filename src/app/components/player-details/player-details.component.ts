import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { TuscanService } from '../../services/tuscan.service';
import { Player } from '../../model/player.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Matches } from '../../model/matches.model';
import { SimpleMatch } from '../../model/simple-match.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() nickname: string;
  
  private hasData: boolean;
  private isLoading: boolean;
  private matches: SimpleMatch[];
  private offset = 0;

  private player: Player;

  constructor(private tuscanService: TuscanService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.nickname = params.get('nickname');
    });
    this.getPlayerDetails(this.nickname);
  }

  private getPlayerDetails(nickname: string) {
    this.tuscanService.getPlayerDetails(this.nickname)
      .subscribe(data => {
        this.player = data;
        this.hasData = true;
        this.isLoading = false;
        this.getPlayerMatches(this.player.playerId);
      }, error => {
        this.hasData = false;
        this.isLoading = false;
    });
  }

  private getPlayerMatches(playerId: string) {
    this.tuscanService.getPlayerMatches(playerId, this.offset).subscribe(data => 
    {
      this.matches = data.simpleMatchList;
    }, error => {
      console.log(error);
    }
    );
  }
}
