import {environment} from '../../environments/environment';

export class AppSettings {
  public static API_ENDPOINT = environment.APIEndpoint;
  public static DEMO_URL_DAYS_TO_EXPIRE = 60;
  public static DEMO_URL_MINUTES_TO_AVAILABLE = 15;
  public static MATCH_ROOM_BASE_URL = 'https://www.faceit.com/en/csgo/room';
}
