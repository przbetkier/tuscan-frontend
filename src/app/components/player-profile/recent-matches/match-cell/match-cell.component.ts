import {Component, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {SimpleMatch} from '@models/simple-match.model';
import {MatchDetails} from '@models/match-details/match-details.model';
import {isNullOrUndefined} from 'util';
import {MatchHistory} from '@models/match-history.model';
import {SlideInOutAnimation} from '../../../../animations/animations';
import {AppSettings} from '../../../../config/app-settings';
import {MatDialog} from '@angular/material';
import {DemoDetailsDialogComponent} from './demo-details-dialog/demo-details-dialog.component';
import {TuscanService} from '../../../../services/tuscan.service';
import {DemoDetailsRequest} from '@models/demo-details/demo-details.model';

@Component({
  selector: 'app-match-cell',
  templateUrl: './match-cell.component.html',
  styleUrls: ['./match-cell.component.css'],
  animations: [SlideInOutAnimation]
})
export class MatchCellComponent implements OnChanges, OnInit {

  @Input() match: SimpleMatch;
  @Input() details: MatchDetails;
  @Input() matchHistory: MatchHistory;

  public win: boolean;
  public expanded = false;
  animationState = 'out';
  public loading = false;
  public innerWidth: any;
  public daysSinceFinished: number;
  public minutesSinceFinished: number;
  public loadingStats = false;

  constructor(public dialog: MatDialog, private tuscanService: TuscanService) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    const today = new Date();
    const diff = Math.abs(today.getTime() - new Date(this.match.finishedAt).getTime());
    this.daysSinceFinished = Math.ceil(diff / (1000 * 3600 * 24));
    this.minutesSinceFinished = Math.floor((diff / 1000) / 60);
  }

  ngOnChanges() {
    if (!isNullOrUndefined(this.details)) {
      this.win = this.details.result === 'WIN';
    }
  }

  public expand(divName: string) {
    if (!this.loading) {
      this.loading = true;
      this.toggleShowDiv(divName);
    }
  }

  public gainedElo(): boolean {
    return this.matchHistory.eloDiff > 0;
  }

  public hasPositiveKd(): boolean {
    return this.matchHistory.kdRatio > 1.0;
  }

  public hasNegativeKd(): boolean {
    return this.matchHistory.kdRatio < 1.0;
  }

  toggleShowDiv(divName: string) {
    if (this.expanded === false) {
      this.expanded = true;
    }

    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';

      setTimeout(() => {
        this.loading = false;
      }, 800);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  dateFormat(): string {
    return this.isDesktopUser() ? 'dd/MM/yy, hh:mm a' : 'dd/MM/yy';
  }

  score(): string {
    return this.isDesktopUser() ? this.details.score : this.details.score.replace('/', ':').replace(/\s/g, '');
  }

  hasHistory(): boolean {
    return !isNullOrUndefined(this.matchHistory) && this.matchHistory !== undefined;
  }

  isDesktopUser(): boolean {
    return this.innerWidth > 768;
  }

  downloadDemo() {
    window.open(this.details.demoUrl, '_blank');
  }

  canDownloadDemo(): boolean {
    return (!this.isTooLateToDownloadDemo() && !this.isTooEarlyToDownloadDemo()) && !isNullOrUndefined(this.details.demoUrl);
  }

  private isTooLateToDownloadDemo(): boolean {
    return this.daysSinceFinished > AppSettings.DEMO_URL_DAYS_TO_EXPIRE;
  }

  private isTooEarlyToDownloadDemo(): boolean {
    return this.minutesSinceFinished <= AppSettings.DEMO_URL_MINUTES_TO_AVAILABLE;
  }

  navigateToMatchRoom() {
    window.open(`${AppSettings.MATCH_ROOM_BASE_URL}/${this.match.matchId}`, '_blank');
  }

  openDemoDetailsDialog() {
    this.dialog.open(DemoDetailsDialogComponent, {
      width: '100vw',
      height: '100vh',
      data: {matchId: this.match.matchId, map: this.details.map},
      backdropClass: 'demo-details-background',
      panelClass: 'custom-modalbox'
    });
  }

  requestDemoStats() {
    this.loadingStats = true;
    this.tuscanService.requestDemoDetails(new DemoDetailsRequest(this.details.matchId)).subscribe(
      () => {
        this.details.demoStatus = 'PARSED';
        this.loadingStats = false;
        this.openDemoDetailsDialog();
      }, () => {
        this.loadingStats = false;
      }
    );
  }

  canShowMoreStats(): boolean {
    return this.canDownloadDemo() && (this.details.demoStatus === 'PARSED' || this.details.demoStatus === 'NO_ACTION') && !this.loadingStats;
  }

  getShowMoreStatsTooltip(): string {
    if (!this.canDownloadDemo()) {
      return `You can't see more stats, your demo file is not available ${this.isTooEarlyToDownloadDemo() ? 'yet' : 'anymore'}`;
    } else if (this.details.demoStatus === 'COMPUTING' || this.loadingStats) {
      return 'We are computing demo details already.';
    } else {
      return 'You can\'t see more stats right now';
    }
  }

  getCannotDownloadDemoTooltip(): string {
    if (this.isTooLateToDownloadDemo()) {
      return `Demo is available to download only for 60 days`;
    } else if (this.isTooEarlyToDownloadDemo()) {
      return `Demo will be available to download soon`;
    } else {
      return 'Demo for this match cannot be found';
    }
  }
}
