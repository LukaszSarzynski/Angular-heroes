import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products = [];

  constructor() { }

  add(product) {
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }
}
