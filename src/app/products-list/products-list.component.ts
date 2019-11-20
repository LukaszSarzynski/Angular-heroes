import { Component, OnInit } from '@angular/core';
import { aStaticProducts } from '../static-products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = aStaticProducts;

  constructor() { }

  ngOnInit() {
  }

  shareWindow() {
    window.alert('This product was shared');
  }

}
