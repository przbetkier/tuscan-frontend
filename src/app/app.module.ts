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
import {TeamInMatchComponent} from './components/match-cell/team-in-match/team-in-match.component';
import {PlayerPerformanceComponent} from './components/match-cell/team-in-match/player-performance/player-performance.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {LevelHintComponent} from './components/player-details/overall-stats/level-hint/level-hint.component';
import {LastMatchesPerformanceComponent} from './components/last-matches-performance/last-matches-performance.component';
import {EloHistoryChartComponent} from './components/elo-history-chart/elo-history-chart.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MapPerformanceComponent} from './components/map-performance/map-performance.component';
import {ThumbnailComponent} from './components/map-performance/thumbnail/thumbnail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    TeamInMatchComponent,
    PlayerPerformanceComponent,
    MainPageComponent,
    LevelHintComponent,
    LastMatchesPerformanceComponent,
    EloHistoryChartComponent,
    MapPerformanceComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {path: '', component: MainPageComponent},
        {path: 'player/:nickname', component: PlayerDetailsComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
