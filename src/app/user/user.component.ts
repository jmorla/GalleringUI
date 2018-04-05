import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { COUNTRIES } from '../mock/constants.mock';
import { User } from '../model/user';

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
     
    constructor(private fb : FormBuilder){

    }
    ngOnInit(){
    }

    selectCountry(country: string){
        this.user.country = country
    }

    updateUserProfile(){
        console.log('bind');
    }
}
