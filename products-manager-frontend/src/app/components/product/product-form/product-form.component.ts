import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  isUpdate!: boolean
  productForm!: FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // getting product on service
      const productId = params['productId'] || ''

      if (!!productId) {
        this.buildNewProductFormGroup()

        this.productService.getProductById(productId).subscribe({
          next: (data) => {
            this.isUpdate = true
            this.buildUpdateFormGroup(data)
          }
        })
      } else {
        this.isUpdate = false
        this.buildNewProductFormGroup()
      }      
    })
  }

  insertProduct() {
    if (this.productForm.invalid) return
    this.productService.createOrUpdateProduct(this.product).subscribe({
      complete: () => {
        this.router.navigate(['/products'])
      }
    })
  }

  buildUpdateFormGroup(product: Product): void {
    this.productForm = new FormGroup({
      nameCtrl: new FormControl(product.name, [Validators.required]),
      id: new FormControl(product.id),
      imageLinkCtrl: new FormControl(product.link),
      priceCtrl: new FormControl(product.price, [Validators.required]),
      categoryCtrl: new FormControl(product.category, [Validators.required]),
    })
  }

  buildNewProductFormGroup(): void {
    this.productForm = new FormGroup({
      nameCtrl: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      imageLinkCtrl: new FormControl(''),
      priceCtrl: new FormControl('', [Validators.required]),
      categoryCtrl: new FormControl('', [Validators.required]),
    })
  }
  
  get name() {
    return this.productForm.get('nameCtrl')!
  }

  get category() {
    return this.productForm.get('categoryCtrl')!
  }

  get price() {
    return this.productForm.get('priceCtrl')!
  }

  get product(): Product {
    return {
      id: this.productForm.get('id')?.value,
      name: this.productForm.get('nameCtrl')?.value,
      category: this.productForm.get('categoryCtrl')?.value,
      price: this.productForm.get('priceCtrl')?.value,
      link: this.productForm.get('imageLinkCtrl')?.value
    }
  }

}
