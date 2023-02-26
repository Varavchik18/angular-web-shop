import { Component, Input } from '@angular/core';
import { ICart, ICartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input()
  get cart() {
    return this._cart;
  }

  set cart(cart: ICart) {
    this._cart = cart;

    this.itemsQuantity = cart.items.
      map((item) => item.quantity).
      reduce((prev, current) => prev + current, 0)
  }


  private _cart: ICart = { items: [] };
  itemsQuantity = 0;

  constructor(private cartService: CartService) {

  }

  onClearCart() {
    this.cartService.clearCart();
  }

  getTotal(cartItems: ICartItem[]): number {
    return this.cartService.getTotal(cartItems);
  }
}
