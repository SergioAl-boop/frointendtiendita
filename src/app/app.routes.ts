import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { DashboardComponent } from './pages/products/products';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,

  },
  {
    path: 'products',
    component: ProductsComponent,

  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
