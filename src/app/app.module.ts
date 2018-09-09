import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MatchCellComponent } from './components/match-cell/match-cell.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ProgressBarComponent } from './components/common/progress-bar/progress-bar.component';
import { FlagComponent } from './components/common/flag/flag.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    LoaderComponent,
    MatchCellComponent,
    BadgeComponent,
    ProgressBarComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', component: AppComponent},
        {path: 'player/:nickname', component: PlayerDetailsComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
