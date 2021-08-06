import { Component, Input, OnInit } from '@angular/core';
import { TuscanService } from '../../services/tuscan.service';
import { Player } from '@models/player.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SimpleMatch } from '@models/simple-match.model';
import { PlayerStats } from '@models/player-stats.model';
import { PlayerHistory } from '@models/player-history.model';
import { MatchDetails } from '@models/match-details/match-details.model';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { LatestProfileRequest } from '@models/latest-profile.request.model';
import { PlayerBan } from '@models/demo-details/demo-details.model';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  @Input() nickname: string;
  public detailedPlayers = [];

  public allMatchesLoaded: boolean;

  public hasData: boolean;
  public isLoading: boolean;

  public matches: SimpleMatch[] = [];
  public matchesMap: MatchDetails[] = [];
  public matchesFetched = 0;

  public player: Player;
  public playerStats: PlayerStats;
  public playerHistory: PlayerHistory;

  public hasPlayerDetails = false;
  public hasPlayerStats = false;
  public hasMatches = false;

  public banned = false;
  public banInfo: PlayerBan = null;

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

  private getPlayerDetails() {
    this.tuscanService.getPlayerDetails(this.nickname)
      .subscribe(data => {
        this.player = data;
        this.isLoading = false;
        this.hasData = true;
        if (isNotNullOrUndefined(this.player.gameDetails)) {
          this.hasPlayerDetails = true;
          this.getPlayerBans(this.player.playerId);
          this.getPlayerOverallStats(this.player.playerId);
          this.getPlayerHistory(this.player.playerId);
          this.getPlayerMatches(this.player.playerId);
        } else {
          this.hasData = false;
        }
      }, error => {
        this.hasData = false;
        this.isLoading = false;
        if (error.status !== 404) {
          this.openErrorDialog();
        }
      });
  }

  private getPlayerMatches(playerId: string) {
    this.tuscanService.getPlayerMatches(playerId, this.offset).subscribe(data => {
        this.matches = this.matches.concat(data.simpleMatchList);

        this.hasMatches = this.matches.length > 0;

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
              if (this.matches.length === this.matchesFetched) {
                this.allMatchesLoaded = true;
              }
            }));

      }, () => {
        this.openErrorDialog();
      }
    );
  }

  private getPlayerOverallStats(playerId: string) {
    this.tuscanService.getPlayerOverallStats(playerId).subscribe(data => {
      this.playerStats = data;
      this.hasPlayerStats = true;
      const latestProfileRequest = this.createRequest();
      this.tuscanService.postPlayerSearched(latestProfileRequest).subscribe();
    }, () => {
      this.openErrorDialog();
    });
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

  private getPlayerBans(playerId: string) {
    this.tuscanService.getPlayerBans(playerId)
      .subscribe(data => {
          if (this.hasPermanentOrOngoingBan(data.bans)) {
            this.banned = true;
            this.banInfo = data.bans[0];
          }
        }
      );
  }

  private hasPermanentOrOngoingBan(bans: PlayerBan[]) {
    return bans.filter(it => it.endsAt === null || new Date(it.endsAt) > new Date()).length > 0;
  }

  openErrorDialog() {
    this.hasErrors = true;
    this.dialog.open(ErrorDialogComponent, {
      width: '80vw',
      data: {},
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
