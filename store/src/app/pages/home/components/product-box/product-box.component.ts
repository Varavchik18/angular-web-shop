import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  product: IProduct | undefined = {
    id: 1,
    title: 'adidas forum',
    price: 150,
    category: 'shoes',
    description: 'best classic sneakers ',
    image: 'https://via.placeholder.com/150'
  };

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
