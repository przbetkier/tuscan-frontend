import {Component, Input, OnInit} from '@angular/core';
import {MatchDetails} from '@models/match-details/match-details.model';
import {PlayerHistory} from '@models/player-history.model';

@Component({
  selector: 'app-recent-performance',
  templateUrl: './recent-performance.component.html',
  styleUrls: ['./recent-performance.component.css']
})
export class RecentPerformanceComponent implements OnInit {

  @Input() public matchesMap: MatchDetails[];
  @Input() public playerHistory: PlayerHistory;
  @Input() public detailedPlayers;
  @Input() public allMatchesLoaded: boolean;

  public performanceLabel = 'ELO';

  constructor() {
  }

  ngOnInit() {
  }

  whenLabelChanged(event: any) {
    this.performanceLabel = event;
  }

  private getWinsCount(): number {
    return this.matchesMap.filter(m => m.result === 'WIN').length;
  }

}
