import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TuscanService} from '../../services/tuscan.service';
import {LatestProfiles} from '../../model/latest-profiles.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private ENTER_KEY = 13;
  name = '';

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_KEY) {
      this.navigateToPlayerStats();
    }
  }

  navigateToPlayerStats() {
      this.router.navigateByUrl(`/player/${this.name}`);
  }

}
