import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '@models/player.model';
import {Matches} from '@models/matches.model';
import {HttpClient} from '@angular/common/http';
import {MatchDetails} from '@models/match-details/match-details.model';
import {PlayerStats} from '@models/player-stats.model';
import {AppSettings} from '../config/app-settings';
import {PlayerHistory} from '@models/player-history.model';
import {PlayerPosition} from '@models/player-position.model';
import {PlayersSearched} from '@models/players-searched.model';
import {LatestProfile} from '@models/latest-profile.model';
import {LatestProfileRequest} from '@models/latest-profile.request.model';
import {DemoDetails, DemoDetailsRequest} from '@models/demo-details/demo-details.model';

@Injectable({
  providedIn: 'root'
})
export class TuscanService {

  constructor(private http: HttpClient) {
  }

  public getPlayerDetails(nickname: string): Observable<Player> {
    return this.http.get<Player>(`${AppSettings.API_ENDPOINT}/faceit/players/details?nickname=` + nickname);
  }

  public getPlayerOverallStats(playerId: string): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(`${AppSettings.API_ENDPOINT}/faceit/players/details/csgo/${playerId}`);
  }

  public getPlayerMatches(playerId: string, offset: number): Observable<Matches> {
    return this.http.get<Matches>(`${AppSettings.API_ENDPOINT}/faceit/matches/simple?playerId=${playerId}&offset=${offset}`);
  }

  public getMatchDetails(playerId: string, matchId: string): Observable<MatchDetails> {
    return this.http.get<MatchDetails>(`${AppSettings.API_ENDPOINT}/faceit/matches?playerId=${playerId}&matchId=${matchId}`);
  }

  public getPlayerHistory(playerId: string): Observable<PlayerHistory> {
    return this.http.get<PlayerHistory>(`${AppSettings.API_ENDPOINT}/faceit/player-history/${playerId}`);
  }

  public getLastProfiles(): Observable<LatestProfile[]> {
    return this.http.get<LatestProfile[]>(`${AppSettings.API_ENDPOINT}/tuscan-api/latest-profiles`);
  }

  public getPlayerPosition(playerId: string, region: string, country: string): Observable<PlayerPosition> {
    return this.http.get<PlayerPosition>(`${AppSettings.API_ENDPOINT}/faceit/player/position?playerId=${playerId}&region=${region}&country=${country}`);
  }

  public postPlayerSearched(request: LatestProfileRequest) {
    return this.http.post(`${AppSettings.API_ENDPOINT}/tuscan-api/latest-profiles`, request);
  }

  public getPlayersSearchedPrompt(nicknameQuery: string): Observable<PlayersSearched> {
    return this.http.get<PlayersSearched>(`${AppSettings.API_ENDPOINT}/faceit/search/players?nickname=${nicknameQuery}`);
  }

  public getDemoDetails(matchId: string): Observable<DemoDetails> {
    return this.http.get<DemoDetails>(`${AppSettings.API_ENDPOINT}/tuscan-api/demo-stats/${matchId}`);
  }

  public requestDemoDetails(demoDetailsRequest: DemoDetailsRequest): Observable<any> {
    return this.http.post<DemoDetails>(`${AppSettings.API_ENDPOINT}/tuscan-api/demo-stats/invoke`, demoDetailsRequest);
  }
}
