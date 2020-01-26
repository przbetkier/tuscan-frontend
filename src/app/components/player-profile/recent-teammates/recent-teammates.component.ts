import {Component, Input, OnInit} from '@angular/core';
import {MatchDetails} from '@models/match-details/match-details.model';
import {TuscanService} from '../../../services/tuscan.service';
import {Teammate} from '@models/teammate-model';

@Component({
  selector: 'app-recent-teammates',
  templateUrl: './recent-teammates.component.html',
  styleUrls: ['./recent-teammates.component.css']
})
export class RecentTeammatesComponent implements OnInit {

  @Input() matches: MatchDetails[];
  @Input() nickname: string;

  mostFrequentTeammates: Teammate[] = [];
  playersMap = new Map<string, number>();

  constructor(private tuscanService: TuscanService) {
  }

  ngOnInit() {
    this.findTheMostFrequentTeammates();
  }

  findTheMostFrequentTeammates() {
    this.matches.forEach(
      match => {
        match.teams.forEach(
          team => {
            if (team.players.filter(p => p.nickname === this.nickname).length > 0) {
              team.players.forEach(
                player => {
                  if (this.playersMap.has(player.nickname)) {
                    this.playersMap.set(player.nickname, this.playersMap.get(player.nickname) + 1);
                  } else {
                    this.playersMap.set(player.nickname, 1);
                  }
                }
              );
            }
          }
        );
      }
    );
    this.sortRecentTeammates();
  }

  sortRecentTeammates() {
    [...this.playersMap].sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    }).filter(a => a[0] !== this.nickname)
      .map(pm => pm[0]).slice(0, 6).forEach(
      nickname => this.tuscanService.getPlayerDetails(nickname).subscribe(
        player => this.mostFrequentTeammates.push(new Teammate(player, this.playersMap.get(nickname))))
    );
  }
}
