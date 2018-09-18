import {Component, Input, OnInit} from '@angular/core';
import {TuscanService} from '../../services/tuscan.service';
import {Player} from '../../model/player.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SimpleMatch} from '../../model/simple-match.model';
import {PlayerStats} from '../../model/player-stats.model';
import {PlayerHistory} from '../../model/player-history.model';
import {MatchHistory} from '../../model/match-history.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() nickname: string;

  public hasData: boolean;
  public isLoading: boolean;
  public matches: SimpleMatch[] = [];
  private offset = 0;
  private matchesMap = new Map();

  public player: Player;
  public playerStats: PlayerStats;
  public playerHistory: PlayerHistory;

  constructor(private tuscanService: TuscanService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nickname = params.get('nickname');
    });
    this.getPlayerDetails();
  }

  private getPlayerDetails() {
    this.tuscanService.getPlayerDetails(this.nickname)
      .subscribe(data => {
        this.player = data;
        this.hasData = true;
        this.isLoading = false;
        this.getPlayerHistory(this.player.playerId);
        this.getPlayerMatches(this.player.playerId);
        this.getPlayerOverallStats(this.player.playerId);
      }, error => {
        this.hasData = false;
        this.isLoading = false;
      });
  }

  private getPlayerMatches(playerId: string) {
    this.tuscanService.getPlayerMatches(playerId, this.offset).subscribe(data => {
        this.matches = this.matches.concat(data.simpleMatchList);
        this.matches.forEach(m => this.tuscanService.getMatchDetails(this.player.playerId, m.matchId).subscribe(data => {
          this.matchesMap.set(data.matchId, data);
        }));
      }, error => {
        console.log(error); // FIXME: Handle status code - 500 -> retries; 404 -> no matches to load!
      }
    );
  }

  private getPlayerOverallStats(playerId: string) {
    this.tuscanService.getPlayerOverallStats(playerId).subscribe(data => {
      this.playerStats = data;
    }, error => {
      console.log(error); // FIXME: Handle errors. Template?
    });
  }

  private getMatchResult(matchId: string) {
    return this.matchesMap.get(matchId);
  }

  private getPlayerHistory(playerId: string) {
    this.tuscanService.getPlayerHistory(playerId).subscribe(data => {
      this.playerHistory = data;
    }, error => {
      console.log(error); // FIXME: Handle errors.
    });
  }

  private getMatchHistory(matchId: string): MatchHistory {
      return this.playerHistory.matchHistory.filter(match => match.matchId === matchId)[0];
  }
}