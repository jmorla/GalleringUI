import { Injectable } from '@angular/core';

@Injectable()
export class BirdService {

  constructor() { }


  countBirdsAlive(): number{
    return 65;
  }

  countBbirdsDied(): number{
    return 25; 
  }

  countRoosterAlive(): number{
    return 35;
  }

  countHanAlive(): number{
    return 30;
  }

  roosterBirdLastMonths(month: number): number[]{
      return [10, 3, 1, 2, 3, 3, 6, 4, 8, 10, 6, 5]
  }

  hanBirdLastMoths(month: number): number[]{
    return  [2, 2, 3, 0, 3, 3, 0, 4, 6, 0, 7, 7];
  }

}
