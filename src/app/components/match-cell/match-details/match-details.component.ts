import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../model/match-details/team.model';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  @Input() teams: Team[];
  public teamOne: Team;
  public teamTwo: Team;

  constructor() { }

  ngOnInit() {
    this.teamOne = this.teams[0];
    this.teamTwo = this.teams[1];
  }

}
