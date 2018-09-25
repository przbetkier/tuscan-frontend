import {Component, Input, OnChanges} from '@angular/core';
import {SimpleMatch} from '../../model/simple-match.model';
import {MatchDetails} from '../../model/match-details/match-details.model';
import {isNullOrUndefined} from 'util';
import {MatchHistory} from '../../model/match-history.model';
import {SlideInOutAnimation} from '../../animations/animations';

@Component({
  selector: 'app-match-cell',
  templateUrl: './match-cell.component.html',
  styleUrls: ['./match-cell.component.css'],
  animations: [
    SlideInOutAnimation
  ]
})
export class MatchCellComponent implements OnChanges {

  @Input() match: SimpleMatch;
  @Input() details: MatchDetails;
  @Input() matchHistory: MatchHistory;

  public win: boolean;
  public expanded = false;
  animationState = 'out';

  ngOnChanges() {
    if (!isNullOrUndefined(this.details)) {
      this.win = this.details.result === 'WIN';
    }
  }

  public expand(divName: string) {
    this.toggleShowDiv(divName);
  }

  public isPositive(): boolean {
    return this.matchHistory.eloGain > 0;
  }

  toggleShowDiv(divName: string) {
    if (this.expanded === false) {
      this.expanded = true;
    }

    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
}
