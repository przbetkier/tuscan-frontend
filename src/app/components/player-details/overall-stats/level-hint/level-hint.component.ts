import {Component, Input, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-level-hint',
  templateUrl: './level-hint.component.html',
  styleUrls: ['./level-hint.component.css']
})
export class LevelHintComponent implements OnInit {

  public nextLevel: number;
  public pointsNeeded: number;

  @Input() level: number;
  @Input() elo: number;

  constructor() {
  }

  ngOnInit() {
    this.calculatePointsToReachNextLevel();
    if (this.level < 10) {
      this.nextLevel = this.level + 1;
    } else {
      this.nextLevel = this.level;
    }
  }

  calculatePointsToReachNextLevel() {
    switch (this.level) {
      case 1: {
        this.pointsNeeded = 801 - this.elo;
        break;
      }
      case 2: {
        this.pointsNeeded = 951 - this.elo;
        break;
      }
      case 3: {
        this.pointsNeeded = 1101 - this.elo;
        break;
      }
      case 4: {
        this.pointsNeeded = 1251 - this.elo;
        break;
      }
      case 5: {
        this.pointsNeeded = 1401 - this.elo;
        break;
      }
      case 6: {
        this.pointsNeeded = 1551 - this.elo;
        break;
      }
      case 7: {
        this.pointsNeeded = 1701 - this.elo;
        break;
      }
      case 8: {
        this.pointsNeeded = 1851 - this.elo;
        break;
      }
      case 9: {
        this.pointsNeeded = 2001 - this.elo;
        break;
      }
    }
  }

}
