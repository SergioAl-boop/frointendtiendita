import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,

  },
  {
    path: 'products',
    component: Products,

  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
