import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayerDetailsComponent} from './components/player-details/player-details.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(PlayerDetailsComponent) private playerDetailsComponent: PlayerDetailsComponent;

  nickname: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
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
