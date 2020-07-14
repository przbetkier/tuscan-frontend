import { Component, Input } from '@angular/core';
import { MatchHistory } from '@models/match-history.model';
import { PlayerHistory } from '@models/player-history.model';
import { SimpleMatch } from '@models/simple-match.model';
import { MatchDetails } from '@models/match-details/match-details.model';

@Component({
  selector: 'app-recent-matches',
  templateUrl: './recent-matches.component.html',
  styleUrls: ['./recent-matches.component.css']
})
export class RecentMatchesComponent {

  @Input() playerHistory: PlayerHistory;
  @Input() matches: SimpleMatch[];
  @Input() matchesMap: MatchDetails[];

  private getMatchResult(matchId: string) {
    return this.matchesMap.filter(m => m.matchId === matchId)[0];
  }

  private getMatchHistory(matchId: string): MatchHistory {
    return this.playerHistory.matchHistory.filter(match => match.matchId === matchId)[0];
  }
}
