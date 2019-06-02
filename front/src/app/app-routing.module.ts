import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { IncidentRegisterComponent } from './pages/incident-register/incident-register.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]
  },
  {
    path: 'incidents', component: IncidentsComponent
  },
  {
    path: 'incident-register', component: IncidentRegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
