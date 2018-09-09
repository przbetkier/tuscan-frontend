import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() elo: number;

  constructor() { }

  ngOnInit() {
    const elem = document.getElementById('myBar');
    const baseLvlPoints = 800;
    const totalToEarn = 1200;
    let percentage = 0;

    if (this.elo > baseLvlPoints && this.elo <= 2000) {
      const difference = this.elo - baseLvlPoints;
      percentage = (difference / totalToEarn) * 100;
    } else if (this.elo < baseLvlPoints) {
      percentage = 1;
    } else {
      percentage = 100;
    }
    let width = 1;

    const id = setInterval(frame, 10);
    function frame() {
      if (width >= percentage) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }

}
