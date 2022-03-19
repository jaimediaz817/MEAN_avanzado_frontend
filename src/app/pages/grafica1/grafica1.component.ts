import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

    public labelsGraph: string[] = ['Label 1', 'Label 2', 'Label 3'];

    public data = [
        [817, 317, 667]
    ];
    //   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    //   // tslint:disable-next-line:member-ordering
    //   public doughnutChartData: MultiDataSet = [
    //       [ 350, 450, 100 ],
    //     ];
    //   // tslint:disable-next-line:member-ordering
    //   public doughnutChartType: ChartType = 'doughnut';

    //   public colors: Color[] = [
    //     { backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
    //   ];

    // events
    //   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //     console.log(event, active);
    //   }

    //   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //     console.log(event, active);
    //   }

}
