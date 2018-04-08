import { Component, OnInit } from '@angular/core';

import { Bird } from '../model/bird';
import {  } from '../mock/constants';
import { SCRATH, COLOR, ENRACES, COLOR_PLACA, CRESTAS, ESTADO } from '../mock/constants.mock';
@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.css']
})
export class BirdDetailComponent implements OnInit {

  model: Bird = new Bird;
  scrathes =  SCRATH;
  colors = COLOR;
  enraces = ENRACES;
  plateTypes = COLOR_PLACA;
  crests = CRESTAS;
  statuses = ESTADO;
  hasParents: boolean = false;

  
  constructor() { }

  ngOnInit() {
    this.model.sex="macho";
  }

}
