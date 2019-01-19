import {Component, Input} from '@angular/core';
import {LatestProfile} from '../../../model/latest-profile.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() profile: LatestProfile;

  constructor(private router: Router) {
  }

  public navigateToPlayerStats(nickname: string) {
    this.router.navigateByUrl(`/player/${nickname}`);
  }
}
