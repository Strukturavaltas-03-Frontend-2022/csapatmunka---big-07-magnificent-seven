import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss'],
})
export class ProductEditorComponent {
  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );
  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onUpdate(product: Product): void {
    switch (product.type) {
      case 'documentary':
        product.catID = 1;
        break;
      case 'comedy':
        product.catID = 2;
        break;
      case 'adventure':
        product.catID = 3;
        break;
    }
    this.productService
      .update(product)
      .subscribe((product) => this.router.navigate(['/']));
  }
}
