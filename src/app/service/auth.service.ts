import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'


export interface LoginResponse{
  token: string;
}

@Injectable()
export class AuthService {

  public token: string;
  constructor(private http: HttpClient) { }

  login(username:string , password: string): Observable<boolean>{
  
    return this.http.post("http://localhost:8080/login",JSON.stringify({username:username,password:password}))
    
    .map((response:LoginResponse)=>{
      let token = response && response.token;
      if(token){
        this.token = token;
        localStorage.setItem('current_user', JSON.stringify({ username: username, token: token }));
        console.log(token)
        
        return true;
      }
      return false;
    })
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('current_user');
  }
}
