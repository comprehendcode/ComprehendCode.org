import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export interface postDetails{ 
  name: String;
  body: {
    desc: String;
    full_text: String;
    img_name: String;
  };
  meta: {
    date: String;
    author: String;
  }

}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL =  'https://comprehendcode.org/api/';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  private httpHeader = {
    headers: {
      'Access-Control-Allow-Origin': 'https://comprehendcode.org/api/'
    }
  }
  public getPost(title: any): Observable<any>{
    return this.http.get(this.baseURL + 'progress/' + title,this.httpHeader).pipe();
  }
  public getPosts(): Observable<any>{
    return this.http.get(this.baseURL + 'progress', this.httpHeader).pipe();
  }
  public createPost(post: postDetails): Observable<any> {
    if (this.auth.isLoggedIn){
      console.log("here Client")
      return this.http.post(this.baseURL+ 'progress/', post, this.httpHeader).pipe();
    }
  }
  public deletePost(post: postDetails): Observable<any> {
    if (this.auth.isLoggedIn) {
      return this.http.delete(this.baseURL + 'progress/' + post.name,
       { headers: { Authorization: `Bearer ${this.auth.getToken()}`, } })
        .pipe();
    }
  }
}


