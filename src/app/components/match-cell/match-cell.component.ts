import { Component, OnInit, Input } from '@angular/core';
import { SimpleMatch } from '../../model/simple-match.model';

@Component({
  selector: 'app-match-cell',
  templateUrl: './match-cell.component.html',
  styleUrls: ['./match-cell.component.css']
})
export class MatchCellComponent implements OnInit {

  @Input() match: SimpleMatch;

  constructor() { }

  ngOnInit() {
  }

}
