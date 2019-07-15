import {Component, OnInit} from '@angular/core';
import {TuscanService} from '../../services/tuscan.service';
import {LatestProfile} from '../../model/latest-profile.model';
import {animate, style, transition, trigger} from '@angular/animations';
import {AppSettings} from '../../config/app-settings';

@Component({
  selector: 'app-latest-profiles',
  templateUrl: './latest-profiles.component.html',
  styleUrls: ['./latest-profiles.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(1)', opacity: 1}))
      ])
    ])
  ]
})
export class LatestProfilesComponent implements OnInit {

  latestProfiles: LatestProfile[];
  loaded: boolean;

  constructor(private tuscanService: TuscanService) {
  }

  ngOnInit() {
    this.tuscanService.getLastProfiles().subscribe(data => {
      this.latestProfiles = data;
      this.loaded = true;
    });
    this.listenToLatestProfileStream();
  }

  listenToLatestProfileStream(): void {
    const source = new EventSource(`${AppSettings.API_ENDPOINT}/tuscan-api/latest-profiles/sse`);
    source.addEventListener('message', message => {
      const profile: LatestProfile = JSON.parse((<any>message).data);
      this.latestProfiles = Array.of(profile).concat(
        this.latestProfiles.filter(p => p.nickname !== profile.nickname)
          .slice(0, 3));
    });
  }
}
