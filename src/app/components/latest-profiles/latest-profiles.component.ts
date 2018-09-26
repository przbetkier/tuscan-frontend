import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LatestProfiles} from '../../model/latest-profiles.model';
import {TuscanService} from '../../services/tuscan.service';

@Component({
  selector: 'app-latest-profiles',
  templateUrl: './latest-profiles.component.html',
  styleUrls: ['./latest-profiles.component.css']
})
export class LatestProfilesComponent implements OnInit {

  latestProfiles: LatestProfiles;
  loaded: boolean;

  constructor(private tuscanService: TuscanService) {
  }

  ngOnInit() {

    this.tuscanService.getLastProfiles().subscribe(data => {
      this.latestProfiles = data;
      this.loaded = true;
    });
  }
}
