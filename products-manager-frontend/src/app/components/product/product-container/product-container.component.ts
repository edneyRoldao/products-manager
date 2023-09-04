import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {

  totalProducts = 0

  constructor(private productService: ProductService) {
    this.productService.getTotalProducts.subscribe(total => this.totalProducts = total)
  }

}
