import {Component, Input} from '@angular/core';
import {LatestProfile} from '../../../model/latest-profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() profile: LatestProfile;

}
