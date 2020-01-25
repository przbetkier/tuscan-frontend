import {Component, Input, OnInit} from '@angular/core';
import {DemoDetails, PlayerDemoData} from '@models/demo-details/demo-details.model';
import {FormControl} from '@angular/forms';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-heatmaps',
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.css']
})
export class HeatmapsComponent implements OnInit {

  @Input() demoDetails: DemoDetails;
  @Input() map: string;

  currentDemoData: PlayerDemoData;
  mode: string;
  kills = true;
  deaths = false;

  playerControl = new FormControl('', []);
  selectedPlayer: string;

  constructor() {
  }

  ngOnInit() {
    this.mode = 'kills';
    this.selectedPlayer = this.demoDetails.data[0].nickname;
    this.changePlayer();
  }

  showCurrentDemoDetails(event: MatSelectChange) {
    this.selectedPlayer = event.value;
    this.changePlayer();
  }

  changePlayer() {
    this.playerControl.setValue(this.selectedPlayer);
    this.currentDemoData = this.demoDetails.data.filter(d => d.nickname === this.selectedPlayer)[0];
  }
}
