import {Component, Input, OnInit} from '@angular/core';
import {LevelInterval} from '@models/level-interval.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() elo: number;
  @Input() level: number;

  constructor() {
  }

  ngOnInit() {
    const elem = document.getElementById('myBar');

    let totalProgress;
    let intervals: LevelInterval[] = [];
    intervals = intervals.concat(
      new LevelInterval(1, 0, 800),
      new LevelInterval(2, 801, 951),
      new LevelInterval(3, 951, 1101),
      new LevelInterval(4, 1101, 1251),
      new LevelInterval(5, 1251, 1401),
      new LevelInterval(6, 1401, 1551),
      new LevelInterval(7, 1551, 1701),
      new LevelInterval(8, 1701, 1851),
      new LevelInterval(9, 1851, 2000),
      new LevelInterval(10, 2000, 3000)
    );

    if (this.level > 1 && this.level < 10) {
      const difference = this.elo - intervals[this.level - 1].base;
      const progress = (difference / 150) * 10;
      totalProgress = ((this.level - 1) * 10) + progress;
    } else if (this.level === 1) {
      const difference = this.elo - intervals[0].base;
      const progress = (difference / 800) * 10;
      totalProgress = ((this.level - 1) * 10) + progress;
    } else if (this.level === 10 && this.elo < 3000) {
      const difference = this.elo - intervals[this.level - 1].base;
      const progress = (difference / 1000) * 10;
      totalProgress = ((this.level - 1) * 10) + progress;
    } else if (this.level === 10 && this.elo >= 3000) {
      totalProgress = 100;
    }
    let width = 1;

    const id = setInterval(frame, 10);

    function frame() {
      if (width >= totalProgress) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }

}
