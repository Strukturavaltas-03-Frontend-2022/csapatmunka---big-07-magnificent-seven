import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product } from 'app/model/product';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();
  title: string = '';

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.product = new Product();
          this.title = 'New Item';
        }
        else
          this.productsService.get(params.id).subscribe(
            item => {
              this.product = item;
              this.title = 'Edit';
            })
      }
    )
  }

  onUpdate(form: NgForm, item: Product): void {

    try {
      if (item.id == 0) {
        this.productsService.create(item).subscribe(() => { });
        this.toastr.warning('Successfull');
        this.router.navigate(['/product-list']);
      }
      else {
        this.productsService.update(item).subscribe(() => { });
        this.toastr.success('Successfull');
        this.router.navigate(['/product-list']);
      }
    } catch (error) {
      this.toastr.error('Error:' + error);
    }
  }

}
