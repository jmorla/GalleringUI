import { Component, OnInit } from '@angular/core';

import { countries } from '../mock/countries.mock';
import { User } from '../model/user';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls:['user.component.css']
})
export class UserComponent implements OnInit{
    
    countriesList:string[] = countries;
    user: User = new User();
     
    ngOnInit(){}

    selectCountry(country: string){
        this.user.country = country
    }

    updateUserProfile(){
        console.log('bind');
    }
}
