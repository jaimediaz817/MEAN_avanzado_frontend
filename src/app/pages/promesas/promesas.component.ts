import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

    constructor() { }

    ejecutarPromesaTipo1() {
        const promesa1 = new Promise( ( resolve, reject ) => {
            // cuerpo sincrono
            resolve('proceso resolve  1');
            // reject('proceso reject 1');
        });

        // estar escuchando mientras se resuelve
        promesa1.then( (result) => {
            console.log('promesa 1 resuelta, result: ' , result);
        })
        .catch( error => {
            console.log('error: ', error);
        });

        console.log('flujo final promesa 1');
    }

    ejecutarPromesaTipo2_getUsuarios() {

        const url = 'https://reqres.in/api/users?page=2';

        const promise = new Promise( resolve => {
            fetch(url)
            .then(response => response.json())
            .then(body => {
                console.log('data: ', body);
                resolve( body.data );
            });
        });

        return promise;
    }

    ngOnInit(): void {
        // TIPO 1:
        this.ejecutarPromesaTipo1();

        // TIPO 2:
        this.ejecutarPromesaTipo2_getUsuarios()
            .then(res => {
                console.log('res resuelta: ', res);
            });
    }

}
