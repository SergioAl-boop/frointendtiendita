import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './inventario.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventarioComponent {
  products = [
  { name: 'Laptop Dell', category: 'Electrónica', price: 15000, stock: 'Disponible' },
  { name: 'Silla Gamer', category: 'Muebles', price: 3200, stock: 'Agotado' },
  { name: 'Smartphone Samsung', category: 'Electrónica', price: 8500, stock: 'Disponible' },
  { name: 'Escritorio de madera', category: 'Muebles', price: 4200, stock: 'Disponible' },
  { name: 'Camisa Polo', category: 'Ropa', price: 750, stock: 'Disponible' },
  { name: 'Audífonos Bluetooth', category: 'Electrónica', price: 1200, stock: 'Agotado' },
  { name: 'Zapatos deportivos', category: 'Ropa', price: 1800, stock: 'Disponible' },
  { name: 'Monitor LG 24"', category: 'Electrónica', price: 3900, stock: 'Disponible' }
];


  newProduct = {
    name: '',
    category: '',
    price: 0,
    stock: ''
  };

  addProduct() {
    this.products.push({ ...this.newProduct });
    this.newProduct = { name: '', category: '', price: 0, stock: '' };
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
