import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    progreso1: number = 0;
    // tslint:disable-next-line:no-inferrable-types
    progreso2: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    // GETTERS
    get getProgreso1() {
        return `${ this.progreso1 }%`;
    }
    get getProgreso2() {
        return `${ this.progreso2 }%`;
    }

    valorSalida(valor: number) {
        console.log('ok', valor);
    }

}
