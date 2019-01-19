import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-player-profiles',
  templateUrl: './player-profiles.component.html',
  styleUrls: ['./player-profiles.component.css']
})
export class PlayerProfilesComponent {

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
