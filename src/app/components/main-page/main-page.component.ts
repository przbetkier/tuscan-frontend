import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private ENTER_KEY = 13;
  name = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_KEY) {
      this.navigateToPlayerStats();
    }
  }

  private navigateToPlayerStats() {
    this.router.navigateByUrl(`/player/${this.name}`);
  }

}
