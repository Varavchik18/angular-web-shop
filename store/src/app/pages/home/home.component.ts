import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  columnsCount = 3;
  rowHeight = ROWS_HEIGHT[this.columnsCount]
  category: string | undefined;

  constructor(private cartService: CartService) {

  }

  onColumnsCountChange(columnsCount: number): void {
    this.columnsCount = columnsCount;
    this.rowHeight = ROWS_HEIGHT[this.columnsCount]
  }

  onShowCategoryChanged(category: string): void {
    this.category = category;
  }

  onAddToCart(product: IProduct): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
