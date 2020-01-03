import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export interface EventDetails{
  event_name: String;
  event_location: String;
  event_date: String;
  info: {
    general: String,
    short_desc: String
  };
  meta: {
    signups: Number,
    thinking_about: Number
  };
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseURL =  'https://api.comprehendcode.org/api/';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }
  
  public getEvent(title: any): Observable<any>{
    return this.http.get(this.baseURL + 'event/' + title).pipe();
  }
  public getEvents(): Observable<any>{
    return this.http.get(this.baseURL + 'events/').pipe();
  }
  public putEvent(event: EventDetails): Observable<any>{
    if (this.auth.isLoggedIn){
      return this.http.post(this.baseURL + 'event/', event, { headers: { Authorization: `Bearer ${this.auth.getToken()}`, }}).pipe();
    }
  }
  public deleteEvent(event: EventDetails): Observable<any> {
    if (this.auth.isLoggedIn) {
      return this.http.delete(this.baseURL + 'events/' + event.event_name,
       { headers: { Authorization: `Bearer ${this.auth.getToken()}`, } })
        .pipe();
    }
  }
}