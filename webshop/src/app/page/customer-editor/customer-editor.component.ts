import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss'],
})
export class CustomerEditorComponent {
  customer$: Observable<Customer> = this.ar.params.pipe(
    switchMap((params) => this.customerService.get(params['id']))
  );
  constructor(
    private ar: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(customer: Customer): void {
    this.customerService
      .update(customer)
      .subscribe((customer) => this.router.navigate(['/']));
  }
}
