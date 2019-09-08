import {environment} from '../../environments/environment';

export class AppSettings {
  public static API_ENDPOINT = environment.APIEndpoint;
  public static CONTACT_ENABLED = environment.contactEnabled;
}
