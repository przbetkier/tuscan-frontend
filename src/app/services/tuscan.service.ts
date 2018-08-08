import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Player} from '../model/player.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuscanService {

  constructor(private http: HttpClient) {    
   }

   public getPlayerDetails(nickname: string): Observable<Player> {
     return this.http.get<Player>('http://localhost:8080/faceit/players/details?nickname=' + nickname);
   }
}
