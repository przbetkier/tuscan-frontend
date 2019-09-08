import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateToDonation() {
    window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YM9BE4KXTKJNW&source=url', '_blank');
  }
}
