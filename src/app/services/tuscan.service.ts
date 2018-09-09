import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Player} from '../model/player.model';
import {Matches} from '../model/matches.model';
import {HttpClient} from '@angular/common/http';
import {MatchDetails} from '../model/match-details/match-details.model';

@Injectable({
  providedIn: 'root'
})
export class TuscanService {

  constructor(private http: HttpClient) {
   }

   public getPlayerDetails(nickname: string): Observable<Player> {
     return this.http.get<Player>('http://localhost:8080/faceit/players/details?nickname=' + nickname);
   }

   public getPlayerMatches(playerId: string, offset: number): Observable<Matches> {
    return this.http.get<Matches>(`http://localhost:8080/faceit/matches/simple?playerId=${playerId}&offset=${offset}`);
  }

  public getMatchDetails(playerId: string, matchId: string): Observable<MatchDetails> {
    return this.http.get<MatchDetails>(`http://localhost:8080/faceit/matches?playerId=${playerId}&matchId=${matchId}`);
  }

}
