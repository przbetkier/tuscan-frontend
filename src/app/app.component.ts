import {Component, HostListener, ViewChild, ViewEncapsulation} from '@angular/core';
import {PlayerDetailsComponent} from './components/player-details/player-details.component';
import {NavigationEnd, Router} from '@angular/router';
import {AppSettings} from './config/app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild(PlayerDetailsComponent) private playerDetailsComponent: PlayerDetailsComponent;

  contactEnabled: boolean = AppSettings.CONTACT_ENABLED;
  nickname: string;
  public innerWidth: any;

  constructor(private router: Router) {
    this.innerWidth = window.innerWidth;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
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
