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
}
