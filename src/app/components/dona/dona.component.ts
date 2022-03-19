import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    @Input() title: string = 'Graphic title';

    // tslint:disable-next-line:member-ordering
    @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];


    // tslint:disable-next-line:member-ordering
    @Input('data') doughnutChartData: MultiDataSet = [
        [ 350, 450, 100 ],
    ];

    constructor() { }

    ngOnInit(): void {
    }




    // tslint:disable-next-line:member-ordering
    public doughnutChartType: ChartType = 'doughnut';

    // tslint:disable-next-line:member-ordering
    public colors: Color[] = [
        { backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
    ];

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }
}
