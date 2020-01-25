import {Component, Input, OnInit} from '@angular/core';
import {LatestProfile} from '@models/latest-profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: LatestProfile;

  ngOnInit() {
    if (this.profile.avatarUrl === '') {
      this.profile.avatarUrl = null;
    }
  }
}
