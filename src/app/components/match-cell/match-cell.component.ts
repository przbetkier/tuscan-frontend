import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {SimpleMatch} from '../../model/simple-match.model';
import {MatchDetails} from '../../model/match-details/match-details.model';
import {isNullOrUndefined} from 'util';
import {MatchHistory} from '../../model/match-history.model';

@Component({
  selector: 'app-match-cell',
  templateUrl: './match-cell.component.html',
  styleUrls: ['./match-cell.component.css']
})
export class MatchCellComponent implements OnChanges {

  @Input() match: SimpleMatch;
  @Input() details: MatchDetails;
  @Input() matchHistory: MatchHistory;

  public win: boolean;
  public expanded = false;

  constructor() {
  }

  ngOnChanges() {
    if (!isNullOrUndefined(this.details)) {
      this.win = this.details.result === 'WIN';
    }
  }

  public expand() {
    this.expanded = !this.expanded;
  }

  public isPositive(): boolean {
    return this.matchHistory.eloGain > 0;
  }
}
