import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { TuscanService } from '../../services/tuscan.service';
import { Player } from '../../model/player.model';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnChanges {

  @Input() nickname: string;
  
  private hasData: boolean;

  private player: Player;

  constructor(private tuscanService: TuscanService, private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    combineLatest(this.route.paramMap)
      .pipe(map(params => ({params: params[0]})))
      .subscribe(p => {
        this.nickname = p.params.get('nickname')});

    this.tuscanService.getPlayerDetails(this.nickname)
      .subscribe(data => {
        console.log(data);
        this.player = data;
        this.hasData = true;
      }, error => {
        this.hasData = false;
        console.log(this.hasData);
    });
  }



}
