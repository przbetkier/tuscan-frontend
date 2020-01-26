import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PlayerProfileComponent} from './components/player-profile/player-profile.component';
import {RouterModule} from '@angular/router';
import {MatchCellComponent} from './components/player-profile/recent-matches/match-cell/match-cell.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ProgressBarComponent} from './components/common/progress-bar/progress-bar.component';
import {FlagComponent} from './components/common/flag/flag.component';
import {OverallStatsComponent} from './components/player-profile/overall-stats/overall-stats.component';
import {TeamInMatchComponent} from './components/player-profile/recent-matches/match-cell/team-in-match/team-in-match.component';
import {PlayerPerformanceComponent} from './components/player-profile/recent-matches/match-cell/team-in-match/player-performance/player-performance.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {LevelHintComponent} from './components/player-profile/overall-stats/level-hint/level-hint.component';
import {LastMatchesPerformanceComponent} from './components/player-profile/recent-performance/last-matches-performance/last-matches-performance.component';
import {EloHistoryChartComponent} from './components/player-profile/recent-performance/elo-history-chart/elo-history-chart.component';
import {ChartsModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {MapPerformanceComponent} from './components/player-profile/map-performance/map-performance.component';
import {ThumbnailComponent} from './components/player-profile/map-performance/thumbnail/thumbnail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LatestProfilesComponent} from './components/latest-profiles/latest-profiles.component';
import {ProfileComponent} from './components/latest-profiles/profile/profile.component';
import {MapsPieChartComponent} from './components/player-profile/map-performance/maps-pie-chart/maps-pie-chart.component';
import {KdBlockChartComponent} from './components/player-profile/map-performance/kd-block-chart/kd-block-chart.component';
import {PositionComponent} from './components/player-profile/overall-stats/position/position.component';
import {PlayerNotFoundComponent} from './components/player-not-found/player-not-found.component';
import {PlayerLinksComponent} from './components/player-profile/player-links/player-links.component';
import {MembershipComponent} from './components/membership/membership.component';
import {MapsOverallPerformanceComponent} from './components/player-profile/map-performance/maps-overall-performance/maps-overall-performance.component';
import {SkullComponent} from './components/common/skull/skull.component';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {AboutComponent} from './components/about/about.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RecentTeammatesComponent} from './components/player-profile/recent-teammates/recent-teammates.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {DemoDetailsDialogComponent} from './components/player-profile/recent-matches/match-cell/demo-details-dialog/demo-details-dialog.component';
import {WeaponsComponent} from './components/player-profile/recent-matches/match-cell/demo-details-dialog/weapons/weapons.component';
import {ActionsComponent} from './components/player-profile/recent-matches/match-cell/demo-details-dialog/actions/actions.component';
import {HeatmapsComponent} from './components/player-profile/recent-matches/match-cell/demo-details-dialog/heatmaps/heatmaps.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {RecentPerformanceComponent} from './components/player-profile/recent-performance/recent-performance.component';
import {RecentMatchesComponent} from './components/player-profile/recent-matches/recent-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileComponent,
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
    PlayerNotFoundComponent,
    PlayerLinksComponent,
    MembershipComponent,
    MapsOverallPerformanceComponent,
    SkullComponent,
    ErrorDialogComponent,
    AboutComponent,
    RecentTeammatesComponent,
    AvatarComponent,
    DemoDetailsDialogComponent,
    WeaponsComponent,
    ActionsComponent,
    HeatmapsComponent,
    RecentPerformanceComponent,
    RecentMatchesComponent],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule,
    ChartsModule,
    InlineSVGModule,
    WavesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    RouterModule.forRoot(
      [
        {path: '', component: MainPageComponent},
        {path: 'player/:nickname', component: PlayerProfileComponent},
        {path: 'about', component: AboutComponent}
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent, DemoDetailsDialogComponent]
})
export class AppModule {
}
