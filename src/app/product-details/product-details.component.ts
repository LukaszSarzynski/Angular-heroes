import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aStaticProducts } from '../static-products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( parms => {
      this.product = aStaticProducts[+parms.get('productId')];
    });
  }

}
