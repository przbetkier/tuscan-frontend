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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {LevelHintComponent} from './components/player-details/overall-stats/level-hint/level-hint.component';
import {LastMatchesPerformanceComponent} from './components/last-matches-performance/last-matches-performance.component';
import {EloHistoryChartComponent} from './components/elo-history-chart/elo-history-chart.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MapPerformanceComponent} from './components/map-performance/map-performance.component';
import {ThumbnailComponent} from './components/map-performance/thumbnail/thumbnail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LatestProfilesComponent} from './components/latest-profiles/latest-profiles.component';
import {ProfileComponent} from './components/latest-profiles/profile/profile.component';
import {MapsPieChartComponent} from './components/maps-pie-chart/maps-pie-chart.component';
import {KdBlockChartComponent} from './components/kd-block-chart/kd-block-chart.component';
import {PositionComponent} from './components/player-details/position/position.component';
import {RollerComponent} from './components/roller/roller.component';
import {PlayerNotFoundComponent} from './components/player-not-found/player-not-found.component';
import {PlayerProfilesComponent} from './components/player-profiles/player-profiles.component';
import {MembershipComponent} from './components/membership/membership.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatTabsModule
} from '@angular/material';

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
    ThumbnailComponent,
    LatestProfilesComponent,
    ProfileComponent,
    MapsPieChartComponent,
    KdBlockChartComponent,
    PositionComponent,
    RollerComponent,
    PlayerNotFoundComponent,
    PlayerProfilesComponent,
    MembershipComponent],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
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
