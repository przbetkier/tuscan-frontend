import {Component, Input, OnInit} from '@angular/core';
import {TuscanService} from '../../services/tuscan.service';
import {Player} from '../../model/player.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SimpleMatch} from '../../model/simple-match.model';
import {PlayerStats} from '../../model/player-stats.model';
import {PlayerHistory} from '../../model/player-history.model';
import {MatchHistory} from '../../model/match-history.model';
import {MatchDetails} from '../../model/match-details/match-details.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() nickname: string;
  public detailedPlayers = [];
  public performanceLabel = 'ELO';

  public allMatchesLoaded: boolean;

  public hasData: boolean;
  public isLoading: boolean;

  public matches: SimpleMatch[] = [];
  public matchesMap: MatchDetails[] = [];
  public matchesFetched = 0;

  public player: Player;
  public playerStats: PlayerStats;
  public playerHistory: PlayerHistory;

  private offset = 0;

  constructor(private tuscanService: TuscanService, private route: ActivatedRoute, private title: Title) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nickname = params.get('nickname');
    });

    this.title.setTitle(`Tuscan - ${this.nickname}'s Faceit stats`);

    this.getPlayerDetails();
  }

  whenLabelChanged(event: any) {
    this.performanceLabel = event;
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
        this.tuscanService.postPlayerSearched(this.nickname).subscribe();
      }, () => {
        this.hasData = false;
        this.isLoading = false;
      });
  }

  private getPlayerMatches(playerId: string) {
    this.tuscanService.getPlayerMatches(playerId, this.offset).subscribe(data => {
        this.matches = this.matches.concat(data.simpleMatchList);
        this.matches.forEach(
          m => this.tuscanService.getMatchDetails(this.player.playerId, m.matchId)
            .subscribe(response => {
              this.matchesMap.push(response);
              this.matchesFetched = this.matchesFetched + 1;
              if (this.matches.length === this.matchesFetched) {
                this.allMatchesLoaded = true;
              }

              response.teams.forEach(t => {
                t.players.forEach(p => {
                  if (p.nickname === this.nickname) {
                    this.detailedPlayers.push(p);

                  }
                });
              });

            }, () => {
              this.matchesFetched = this.matchesFetched + 1;
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
    return this.matchesMap.filter(m => m.matchId === matchId)[0];
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

  private getWinsCount(): number {
    return this.matchesMap.filter(m => m.result === 'WIN').length * 100;
  }

  private getEloGained(): number {
    const historySize = this.playerHistory.matchHistory.length;
    const oldestMatchElo = this.playerHistory.matchHistory[historySize - 1].elo;
    if (oldestMatchElo !== 0) {
      return (this.player.gameDetails.faceitElo - oldestMatchElo);
    } else {
      return -9999; // TODO: Implement better mechanism...
    }
  }
}
