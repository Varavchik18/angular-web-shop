import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<ICart>({ items: [] })

  constructor(private _snackBar: MatSnackBar) {

  }

  addToCart(item: ICartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1;
    }
    else {
      items.push(item);
    }

    this.cart.next({ items });

    this._snackBar.open('1 item added to cart', 'Ok', { duration: 3000 });
  }

  getTotal(items: ICartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] })
    this._snackBar.open('Card is cleared', 'Ok', { duration: 3000 })
  }

  removeCartItem(item: ICartItem): void {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    this.cart.next({ items: filteredItems });
    this._snackBar.open('Item removed from cart', 'Ok', { duration: 3000 })
  }

  decreaseCartItemQuantity(item: ICartItem): void {
    this.cart.value.items.map((_item) => {
      if (_item.id === item.id && _item.quantity !== 0) {
        _item.quantity--;
      }

      if (_item.quantity === 0)
        this._snackBar.open('List of selected product is empty', 'OK', { duration: 3000 })
    })
  }
}
