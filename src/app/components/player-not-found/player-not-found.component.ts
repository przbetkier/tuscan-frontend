import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-not-found',
  templateUrl: './player-not-found.component.html',
  styleUrls: ['./player-not-found.component.css']
})
export class PlayerNotFoundComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  returnToHomePage() {
    this.router.navigateByUrl(`/`);
  }
}
