import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DemoDetails} from '../../../../model/demo-details/demo-details.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PlayerDemoStats {
  nickname: string;
  plants: number;
  defusals: number;
  enemiesFlashed: number;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() demoDetails: DemoDetails;

  PLAYER_DATA: PlayerDemoStats[] = [];
  displayedColumns: string[] = ['nickname', 'plants', 'defusals', 'enemiesFlashed'];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.demoDetails.data.forEach(
      playerData => this.PLAYER_DATA.push({
        nickname: playerData.nickname,
        plants: playerData.plants,
        defusals: playerData.defusals,
        enemiesFlashed: playerData.flashed
      })
    );
    this.dataSource = new MatTableDataSource(this.PLAYER_DATA);
    this.dataSource.sort = this.sort;
  }
}
