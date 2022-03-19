import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    public menuItems: any[] = [
        {
            titulo: 'Dashboard',
            icono: 'mdi mdi-gauge',
            orden: 1,
            submenu: [
                {
                    titulo: 'Main',
                    url: '/'
                },
                {
                    titulo: 'ProgressBar',
                    url: 'progress'
                },
                {
                    titulo: 'Gráficas',
                    url: 'grafica1'
                },
            ]
        }
    ];

    constructor() { }
}
