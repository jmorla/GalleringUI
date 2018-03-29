import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { BirdService } from '../service/bird.service';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    
    roostersAlive: number;
    hanAlive: number;
    birdAlive: number;
    birdDied: number;

    constructor(private birdService: BirdService){}

    ngOnInit(){

        //fething analytics
        this.roostersAlive = this.birdService.countRoosterAlive();
        this.hanAlive = this.birdService.countHanAlive();
        this.birdAlive = this.birdService.countBirdsAlive();
        this.birdDied = this.birdService.countBbirdsDied();

       var hanAmount = this.birdService.hanBirdLastMoths(0);
       var roosterAmount = this.birdService.roosterBirdLastMonths(0);

        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [roosterAmount,hanAmount]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);



        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });
    }
}
