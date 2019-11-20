import {Component, Inject, Input, OnInit} from '@angular/core';
import {TuscanService} from '../../services/tuscan.service';
import {Player} from '../../model/player.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SimpleMatch} from '../../model/simple-match.model';
import {PlayerStats} from '../../model/player-stats.model';
import {PlayerHistory} from '../../model/player-history.model';
import {MatchHistory} from '../../model/match-history.model';
import {MatchDetails} from '../../model/match-details/match-details.model';
import {Title} from '@angular/platform-browser';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {LatestProfileRequest} from '../../model/latest-profile.request.model';

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

  hasErrors = false;

  private offset = 0;

  constructor(private tuscanService: TuscanService, private route: ActivatedRoute, private title: Title, public dialog: MatDialog) {
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
        this.isLoading = false;
        this.player = data;
        if (isNotNullOrUndefined(this.player.gameDetails)) {
          this.hasData = true;
          this.getPlayerHistory(this.player.playerId);
          this.getPlayerMatches(this.player.playerId);
          this.getPlayerOverallStats(this.player.playerId);
        } else {
          this.hasData = false;
        }
      }, () => {
        this.hasData = false;
        this.isLoading = false;
        this.openErrorDialog();
      });
  }

  private getPlayerMatches(playerId: string) {
    this.tuscanService.getPlayerMatches(playerId, this.offset).subscribe(data => {
        this.matches = this.matches.concat(data.simpleMatchList);
        this.matches.forEach(
          m => this.tuscanService.getMatchDetails(this.player.playerId, m.matchId)
            .subscribe(response => {
              this.matchesMap.push(response);
              this.matchesFetched++;
              if (this.matches.length === this.matchesFetched) {
                this.allMatchesLoaded = true;
              }

              response.teams.forEach(t => {
                t.players.forEach(p => {
                  if (p.playerId === this.player.playerId) {
                    this.detailedPlayers.push(p);
                  }
                });
              });

            }, () => {
              this.matchesFetched++;
            }));

      }, () => {
        this.openErrorDialog();
      }
    );
  }

  private getPlayerOverallStats(playerId: string) {
    this.tuscanService.getPlayerOverallStats(playerId).subscribe(data => {
      this.playerStats = data;
      let latestProfileRequest = this.createRequest();
      this.tuscanService.postPlayerSearched(latestProfileRequest).subscribe();
    }, () => {
      this.openErrorDialog();
    });
  }

  private getMatchResult(matchId: string) {
    return this.matchesMap.filter(m => m.matchId === matchId)[0];
  }

  private getPlayerHistory(playerId: string) {
    this.tuscanService.getPlayerHistory(playerId).subscribe(data => {
      this.playerHistory = data;
    }, error => {
      if (error.status === 500) {
        this.openErrorDialog();
      }
    });
  }

  private getMatchHistory(matchId: string): MatchHistory {
    return this.playerHistory.matchHistory.filter(match => match.matchId === matchId)[0];
  }

  private getWinsCount(): number {
    return this.matchesMap.filter(m => m.result === 'WIN').length;
  }

  openErrorDialog() {
    this.hasErrors = true;
    this.dialog.open(ErrorDialogComponent, {
      width: '1000px',
      data: {name: 'xd', animal: 's'},
      panelClass: 'custom-modalbox'
    });
  }

  private createRequest(): LatestProfileRequest {
    return new LatestProfileRequest(
      this.player.nickname,
      this.player.avatarUrl,
      this.player.gameDetails.level,
      this.player.gameDetails.faceitElo,
      this.playerStats.overallStats.kdRatio
    );
  }
}
