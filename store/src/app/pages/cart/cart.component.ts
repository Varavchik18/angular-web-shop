import { Component } from '@angular/core';
import { ICart, ICartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

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
    this.cartService.cart.subscribe((_cart: ICart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }

  constructor(private cartService: CartService) {

  }

  getTotal(items: ICartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onClearCartItem(item: ICartItem): void {
    this.cartService.removeCartItem(item);
  }

  decreaseQuantity(item: ICartItem): void {
    this.cartService.decreaseCartItemQuantity(item);
  }

  increaseQuantity(item: ICartItem): void {
    this.cartService.addToCart(item);
  }
}
