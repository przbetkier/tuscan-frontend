import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TuscanService} from '../../../../../services/tuscan.service';
import {DemoDetails} from '@models/demo-details/demo-details.model';

export interface DemoDetailsDialogData {
  matchId: string;
  map: string;
  player: string;
}

@Component({
  selector: 'app-demo-details-dialog',
  templateUrl: './demo-details-dialog.component.html',
  styleUrls: ['./demo-details-dialog.component.css']
})
export class DemoDetailsDialogComponent implements OnInit {

  section = 'weapons';
  player: string;
  loading = true;
  hasError = false;
  demoDetails: DemoDetails;

  constructor(public dialogRef: MatDialogRef<DemoDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DemoDetailsDialogData,
              private tuscanService: TuscanService) {
  }

  ngOnInit() {
    this.player = this.data.player;
    this.tuscanService.getDemoDetails(this.data.matchId).subscribe(
      data => {
        this.demoDetails = data;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.hasError = true;
      });
  }

  selectSection(section: string) {
    this.section = section;
  }
}
