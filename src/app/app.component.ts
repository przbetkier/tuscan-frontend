import {Component, HostListener, ViewChild, ViewEncapsulation} from '@angular/core';
import {PlayerProfileComponent} from './components/player-profile/player-profile.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild(PlayerProfileComponent) private playerDetailsComponent: PlayerProfileComponent;

  nickname: string;
  public innerWidth: any;

  constructor(private router: Router) {
    this.innerWidth = window.innerWidth;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.location.hostname !== 'localhost') {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}
