import { Component, OnInit } from '@angular/core';

import { Bird } from '../model/bird';
import {  } from '../mock/constants';
import { SCRATH } from '../mock/constants.mock';
@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.css']
})
export class BirdDetailComponent implements OnInit {

  model: Bird = new Bird;
  scrathes =  SCRATH;
  
  constructor() { }

  ngOnInit() {
  }

}
