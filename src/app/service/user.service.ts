import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { User } from '../model/user';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+this.auth.token
    })
  };

  private userApi = "http://localhost:8080/users";

  constructor(private auth: AuthService, private http: HttpClient) { }

  getLogedUser():Observable<User>{
    return this.http.get<User>(this.userApi+"/me", this.httpOptions);
  }


  updateUser(id: number, user: User):Observable<User>{   
    return this.http.put<User>(this.userApi+"/"+id,user, this.httpOptions);
    
  }
}
