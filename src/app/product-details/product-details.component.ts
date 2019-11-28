import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aStaticProducts } from '../static-products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product;

  constructor(private route: ActivatedRoute, private cardService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( parms => {
      this.product = aStaticProducts[+parms.get('productId')];
    });
  }

  addToCart(product) {
    window.alert(product.name + ' has been added to cart');
    this.cardService.add(product);
  }

}
