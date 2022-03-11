import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// TODO: routes
const routes: Routes = [
    // rutas protegidas
    {
        path: '',
        component: PagesComponent,
        // Rutas hijas:
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'progress', component: ProgressComponent
            },
            {
                path: 'grafica1', component: Grafica1Component
            },
            {
                // redirecciona automáticamente a la dashboard
                path: '', redirectTo: '/dashboard', pathMatch: 'full'
            },
        ]
    },

    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    },

    {
        // redirecciona automáticamente a la dashboard
        path: '**', component: NopagefoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
