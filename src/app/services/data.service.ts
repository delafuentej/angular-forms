import { Injectable } from '@angular/core';
import { UserSettings } from '../models/user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  getSubscriptionTypes():Observable<string[]>{
    return of(['Monthly','Quarterly','Annual','Lifetime'])
  }
  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
    /* return of(userSettings) */
    return this.http.post('https://putsreq.com/N2OqfrfV6KGdsad7JI5P',userSettings)
  }
}
