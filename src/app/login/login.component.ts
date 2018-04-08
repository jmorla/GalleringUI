import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


export interface Token {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username;
  private password;
  private validLogin: boolean = true;

  constructor(private authService: AuthService,private route: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login(this.username,this.password)
    .subscribe(result=>{
      if(result){
        this.route.navigate(["/dashboard"])
      }
    },err=>{
      this.validLogin = false;
    })
  }
}
