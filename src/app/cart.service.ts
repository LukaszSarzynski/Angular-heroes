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

  remove(product) {
    // return this.products = this.products.filter(v => v.name !== product.name);
    this.products.splice(this.products.indexOf(product), 1); // remove only one elemets
    return this.products;
  }

  countIteam(): number {
    return this.products.length;
  }
}
