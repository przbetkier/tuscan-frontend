import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../model/player.model';
import {Matches} from '../model/matches.model';
import {HttpClient} from '@angular/common/http';
import {MatchDetails} from '../model/match-details/match-details.model';
import {PlayerStats} from '../model/player-stats.model';

@Injectable({
  providedIn: 'root'
})
export class TuscanService {

  constructor(private http: HttpClient) {
  }

  public getPlayerDetails(nickname: string): Observable<Player> {
    return this.http.get<Player>('https://tuscan-service.herokuapp.com/faceit/players/details?nickname=' + nickname);
  }

  public getPlayerOverallStats(playerId: string): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(`https://tuscan-service.herokuapp.com/faceit/players/details/csgo/${playerId}`);
  }

  public getPlayerMatches(playerId: string, offset: number): Observable<Matches> {
    return this.http.get<Matches>(`https://tuscan-service.herokuapp.com/faceit/matches/simple?playerId=${playerId}&offset=${offset}`);
  }

  public getMatchDetails(playerId: string, matchId: string): Observable<MatchDetails> {
    return this.http.get<MatchDetails>(`https://tuscan-service.herokuapp.com/faceit/matches?playerId=${playerId}&matchId=${matchId}`);
  }

}
