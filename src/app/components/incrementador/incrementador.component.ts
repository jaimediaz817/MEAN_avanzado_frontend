import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    // INPUTS
    // tslint:disable-next-line:no-inferrable-types
    @Input() progreso: number = 0;
    // tslint:disable-next-line:no-inferrable-types
    @Input() btnClass: string = 'btn-primary';

    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

    // GETTERS
    // get getPorcentaje() {
    //     return `${ this.progreso }%`;
    // }

    cambiarValor( valor: number) {
        if (this.progreso >= 100 && valor >= 0) {
            this.valorSalida.emit(100);
            return this.progreso = 100;
        }

        if (this.progreso <= 0 && valor < 0) {
            this.valorSalida.emit(0);
            return this.progreso = 0;
        }

        console.log('process: ', this.progreso, ' + ', valor);

        if (valor < 0) {
            valor = Math.abs(valor);
            this.progreso = this.progreso - Number(valor);
        } else {
            console.log('+');
            valor = Math.abs(valor);
            this.progreso = Number(this.progreso) + Number(valor * 1);
        }

        this.valorSalida.emit(this.progreso);
    }

    onChange(valor: number) {
        console.log('change ', valor);

        if (valor >= 100) {
            this.progreso = 100;
        } else if (valor <= 0) {
            this.progreso = 0;
        } else {
            this.progreso = valor;
        }

        this.valorSalida.emit(this.progreso);
    }

}
