import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProductsComponent } from './pages/products/products';
import { AddProductComponent } from './pages/addProduct/addProduct';
import { InventarioComponent } from './pages/inventario/inventario';

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
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: 'inventario',
    component: InventarioComponent,
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
