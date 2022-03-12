import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

// TODO: routes
const routes: Routes = [
    // rutas protegidas
    {
        path: 'dashboard',
        component: PagesComponent,
        // Rutas hijas:
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
            // {
            //     path: '', redirectTo: '/dashboard', pathMatch: 'full'
            // },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
