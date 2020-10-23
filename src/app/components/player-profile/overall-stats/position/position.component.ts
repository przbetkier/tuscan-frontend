import {Component, Input, OnInit} from '@angular/core';
import {TuscanService} from '../../../../services/tuscan.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input() playerId: string;
  @Input() region: string;
  @Input() country: string;

  positionInCountry: number;
  positionInRegion: number;
  loaded = false;

  private decimalPipe = new DecimalPipe('en_US');

  constructor(private tuscanService: TuscanService) { }

  ngOnInit() {
    this.tuscanService.getPlayerPosition(this.playerId, this.region, this.country)
      .subscribe(
      data => {
        this.positionInCountry = data.positionInCountry;
        this.positionInRegion = data.positionInRegion;
        this.loaded = true;
      }
    );
  }

  public formatPlayerRankingPosition(position: number): string {
    return position === 0 ? 'unranked' : this.decimalPipe.transform(position, '1.');
  }
}
