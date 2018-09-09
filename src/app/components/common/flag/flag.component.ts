import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  @Input() country: string;

  public url: string;

  ngOnInit() {
    this.url = `https://www.countryflags.io/${this.country}/flat/64.png`;
  }

}
