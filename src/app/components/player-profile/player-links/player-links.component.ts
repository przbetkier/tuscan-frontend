import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-player-links',
  templateUrl: './player-links.component.html',
  styleUrls: ['./player-links.component.css']
})
export class PlayerLinksComponent {

  readonly steamUrl = 'https://steamcommunity.com/profiles';
  readonly faceitUrl = 'https://faceit.com/en/players';

  @Input() nickname: string;
  @Input() steamId: string;

  goToFaceitProfile() {
    window.open(`${this.faceitUrl}/${this.nickname}`, '_blank');
  }

  goToSteamProfile() {
    window.open(`${this.steamUrl}/${this.steamId}`, '_blank');
  }
}
