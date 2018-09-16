import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PlayerDetailsComponent} from './components/player-details/player-details.component';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from './components/loader/loader.component';
import {MatchCellComponent} from './components/match-cell/match-cell.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ProgressBarComponent} from './components/common/progress-bar/progress-bar.component';
import {FlagComponent} from './components/common/flag/flag.component';
import {OverallStatsComponent} from './components/player-details/overall-stats/overall-stats.component';
import {MatchDetailsComponent} from './components/match-cell/match-details/match-details.component';
import {TeamInMatchComponent} from './components/match-cell/match-details/team-in-match/team-in-match.component';
import {PlayerPerformanceComponent} from './components/match-cell/match-details/team-in-match/player-performance/player-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    LoaderComponent,
    MatchCellComponent,
    BadgeComponent,
    ProgressBarComponent,
    FlagComponent,
    OverallStatsComponent,
    MatchDetailsComponent,
    TeamInMatchComponent,
    PlayerPerformanceComponent
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
export class AppModule {
}
