import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,],
  templateUrl: './addProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
  isModalOpen = false;

newProduct = {
  name: '',
  category: '',
  price: 0,
  stock: ''
};

openModal() {
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}

addProduct() {
  console.log('Nuevo producto:', this.newProduct);
  // Aquí puedes agregarlo a tu lista de productos
  this.closeModal();
}
}
