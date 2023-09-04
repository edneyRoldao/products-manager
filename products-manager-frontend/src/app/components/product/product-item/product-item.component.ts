import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductPricePipe } from 'src/app/pipes/product-price.pipe';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductPricePipe]
})
export class ProductItemComponent {

  @Input()
  product: Product = {} as Product

  constructor(private router: Router, private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.product.id!).subscribe({
      complete: () => {
        window.location.reload()
      }
    })
  }

}
