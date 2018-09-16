import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../../model/match-details/team.model';

@Component({
  selector: 'app-team-in-match',
  templateUrl: './team-in-match.component.html',
  styleUrls: ['./team-in-match.component.css']
})
export class TeamInMatchComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
