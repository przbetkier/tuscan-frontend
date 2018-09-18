import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../../model/match-details/team.model';
import {PlayerMatchModel} from '../../../../model/match-details/player-match.model';

@Component({
  selector: 'app-team-in-match',
  templateUrl: './team-in-match.component.html',
  styleUrls: ['./team-in-match.component.css']
})
export class TeamInMatchComponent implements OnInit {

  @Input() team: Team;
  order = 'playerStats.kills';
  public players: PlayerMatchModel[];
  public reversed = true;

  byKills: boolean;
  byAssists: boolean;
  byDeaths: boolean;
  byKdRatio: boolean;
  byKrRatio: boolean;
  byHsPercentage: boolean;

  ngOnInit() {
    this.players = this.team.players;
  }

  sortByKills() {
    this.clearAll();
    this.byKills = true;
    this.order = 'playerStats.kills';
    this.reversed = !this.reversed;
  }

  sortByAssists() {
    this.clearAll();
    this.byAssists = true;
    this.order = 'playerStats.assists';
    this.reversed = !this.reversed;
  }

  sortByDeaths() {
    this.clearAll();
    this.byDeaths = true;
    this.order = 'playerStats.deaths';
    this.reversed = !this.reversed;
  }

  sortByKdRatio() {
    this.clearAll();
    this.byKdRatio = true;
    this.order = 'playerStats.kdRatio';
    this.reversed = !this.reversed;
  }

  sortByKrRatio() {
    this.clearAll();
    this.byKrRatio = true;
    this.order = 'playerStats.krRatio';
    this.reversed = !this.reversed;
  }

  sortByHsPercentage() {
    this.clearAll();
    this.byHsPercentage = true;
    this.order = 'playerStats.headshotPercentage';
    this.reversed = !this.reversed;
  }

  private clearAll() {
    this.byKills = false;
    this.byAssists = false;
    this.byDeaths = false;
    this.byKdRatio = false;
    this.byKrRatio = false;
    this.byHsPercentage = false;
  }

}
