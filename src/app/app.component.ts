import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TuscanService } from './services/tuscan.service';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import {Router, ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tuscan';

  @ViewChild(PlayerDetailsComponent) private playerDetailsComponent: PlayerDetailsComponent;

  nickname: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getPlayerDetails(nickname: string) {
    this.nickname = nickname;
        if (this.nickname) {
          this.router.navigate([`player/${nickname}`]);
        }
  }
}
