import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];