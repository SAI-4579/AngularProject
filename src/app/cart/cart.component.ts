import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: any[] = [];
  total: number = 0;
constructor (private cs: CartService) {}
ngOnInit (): void {
  this.cart = this.cs.getCartItems();
  this.cart.reduce((pre, curr)=> pre+curr.price, 0)
}
}
