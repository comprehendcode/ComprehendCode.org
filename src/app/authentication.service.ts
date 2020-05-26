import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}
export interface TokenPayload {
  // Used to generate a Token 
  email: string;
  password: string;
  name?: string;
}
@Injectable()
export class AuthenticationService {
  private token: string = localStorage.getItem("token")
  private baseUrl: string = "https://www.comprehendcode.org";
  constructor(private http: HttpClient, private router: Router) { }
  private httpHeader = {
    headers: {
      'Access-Control-Allow-Origin': 'https://www.comprehendcode.org'
    }
  }
  public login(user: TokenPayload): Observable<any> {
    return this.http.post(this.baseUrl + "/api/login", { email: user.email, password: user.password }, this.httpHeader).pipe(
      map((result: TokenResponse) => {
        if (result.token) {
          this.setToken(result.token);
        }
      })
    )
  }
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  public register(user: TokenPayload): Observable<any> {
    return this.http.post(this.baseUrl + "/api/register", { name: user.name, email: user.email, password: user.password }).pipe(
      map((result: TokenResponse) => {
        if (result.token) {
          this.setToken(result.token);
        }
      })
    )
  }
  public getToken(): string {
    return localStorage.getItem("token");
  }
  public setToken(token: string): void {
    this.token = token;
    localStorage.setItem("token", token);
  }

  public getProfile(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/profile", { headers: { Authorization: `Bearer ${this.getToken()}` } }).pipe(
      map((result: TokenResponse) => {
        if (result.token) {
          this.setToken(result.token);
        }
      }));
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
}

