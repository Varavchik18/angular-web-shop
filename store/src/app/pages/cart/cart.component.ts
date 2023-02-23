import { Component } from '@angular/core';
import { ICart, ICartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: ICart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'shoes',
        price: 150,
        quantity: 1,
        id: 1
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'shoes',
        price: 240,
        quantity: 2,
        id: 1
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'shoes',
        price: 150,
        quantity: 4,
        id: 1
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'shoes',
        price: 150,
        quantity: 1,
        id: 1
      }
    ]
  }

  displayedColumns: string[] = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ];
  dataSource: ICartItem[] = [];

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items: ICartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }
}
