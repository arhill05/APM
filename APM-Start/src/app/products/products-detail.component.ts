import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from "@angular/router";
import { ProductService } from './product.service';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => {
      this.pageTitle += `: ${id}`;
      this.product = product;
    });
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
