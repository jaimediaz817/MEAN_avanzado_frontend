import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// TODO: routes
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        // redirecciona automáticamente a la dashboard
        path: '**', component: NopagefoundComponent
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      PagesRoutingModule,
      AuthRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
