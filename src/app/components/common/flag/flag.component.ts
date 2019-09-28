import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html'
})
export class FlagComponent implements OnInit {

  @Input() country: string;
  @Input() size: number;

  public url: string;
  private OCEANIA_DEFAULT = 'AU';

  ngOnInit() {
    if (this.country === 'Oceania') {
      this.country = this.OCEANIA_DEFAULT;
    }
    this.url = `https://www.countryflags.io/${this.country}/flat/${this.size}.png`;
  }
}
