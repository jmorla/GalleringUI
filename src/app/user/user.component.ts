import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { COUNTRIES } from '../mock/constants.mock';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls:['user.component.css']
})
export class UserComponent implements OnInit{
    
    email = new FormControl('', [Validators.maxLength(50),Validators.email]);
    countriesList:string[] = COUNTRIES;
    user: User = new User();
     
    constructor(private fb : FormBuilder, private userService: UserService){

    }
    ngOnInit(){
        this.userService.getLogedUser().subscribe(data=>{
         this.user = data;   
        })
    }

    updateUserProfile(){
        this.userService.updateUser(this.user.id,this.user).subscribe(data=>{
            console.log('something happened here')
        });
    }
}
