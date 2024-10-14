import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartItems: any[] = [];
private cartItemsSubject = new Subject();
  cartItemsObs = this.cartItemsSubject.asObservable();

  constructor(private hc:HttpClient) { }

  addToCart(pro: any) {
    this.cartItems.push(pro);
    this.cartItemsSubject.next(this.cartItems);
  }
  getCartItems() {
    return this.cartItems;
  }
  getData() {
    return this.hc.get('https://dummyjson.com/products')
  }
  getSpecificData(id: any) {
    return this.hc.get(`https://dummyjson.com/products/${id}`)
  }

}
