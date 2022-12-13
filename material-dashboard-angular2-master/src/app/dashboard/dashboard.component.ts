import { Component, OnInit } from '@angular/core';
import { BillService } from 'app/service/bill.service';
import { CustomerService } from 'app/service/customer.service';
import { OrdersService } from 'app/service/orders.service';
import { ProductsService } from 'app/service/products.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeProductsCount: number = 0;
  activeCustomerCount: number = 0;
  newOrdersCount: number = 0; 
  newBillsSum: number = 0;

  loading: boolean;

  constructor(
    private productsService: ProductsService,
    private customersService: CustomerService,
    private ordersService: OrdersService,
    private billsService: BillService
  ) { }

  

  ngOnInit() {


    this.loading = true;
    this.productsService.getAll()
      .pipe(finalize(() => this.loading = false)
      ).subscribe(products => {
        this.activeProductsCount = products.filter(p => p.active).length;
      })

    this.loading = true;
    
    this.loading = true;
    this.customersService.getAll()
      .pipe(finalize(() => this.loading = false)
      ).subscribe(customers => {
        this.activeCustomerCount = customers.filter(c => c.active).length;
      })


    this.loading = true;
    this.ordersService.getAll()
      .pipe(finalize(() => this.loading = false)
      ).subscribe(orders => {

        this.loading = true;
        this.billsService.getAll()
          .pipe(finalize(() => this.loading = false)
          ).subscribe(bills => {
            this.newBillsSum = 0;
            bills.filter(b => b.status == "new")
              .forEach(item => this.newBillsSum += item.amount);
          })

      })

  }
}