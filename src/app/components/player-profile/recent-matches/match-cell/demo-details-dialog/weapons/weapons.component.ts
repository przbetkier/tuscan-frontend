import {Component, Input, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material';
import {DemoDetails, DemoKill} from '@models/demo-details/demo-details.model';
import {FormControl} from '@angular/forms';

export interface GroupedKill {
  weapon: string;
  kills: number;
  entries: number;
  headshots: number;
  wallbangs: number;
}

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  dataSource: GroupedKill[] = [];

  displayedColumns: string[] = ['weapon', 'kills', 'entries', 'headshots'];

  selectedPlayer: string;
  currentMap: any;

  groupedKills: GroupedKill[];

  playerControl = new FormControl('', []);

  @Input() demoDetails: DemoDetails;

  ngOnInit() {
    this.selectedPlayer = this.demoDetails.data[0].nickname;
    this.playerControl.setValue(this.selectedPlayer);
    this.changePlayer();
  }

  showCurrentDemoDetails(event: MatSelectChange) {
    this.selectedPlayer = event.value;
    this.changePlayer();
  }

  getDataByNickname(): any {
    return this.demoDetails.data.filter(d => d.nickname === this.selectedPlayer).map(
      data => data.kills.reduce(function (acc, obj) {
        const key = obj['weapon'];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {})
    );
  }

  changePlayer() {
    this.currentMap = this.getDataByNickname();
    const myMap: Map<string, DemoKill[]> = this.currentMap[0];

    this.groupedKills = Object.keys(myMap).map(d => {
      const grouped: GroupedKill = {
        weapon: d,
        kills: myMap[d].length,
        entries: myMap[d].filter(k => k.entry).length,
        headshots: myMap[d].filter(k => k.entry).length,
        wallbangs: myMap[d].filter(k => k.wallbang).length
      };
      return grouped;
    });

    this.groupedKills.sort((n1, n2) => {
      if (n1.kills > n2.kills) {
        return -1;
      }
      if (n1.kills < n2.kills) {
        return 1;
      }
      return 0;
    });

    this.dataSource = this.groupedKills;
  }
}
