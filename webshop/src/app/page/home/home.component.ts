import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customerColumns: ITableColumn[] = this.config.customerTableColumns;
  productColumns: ITableColumn[] = this.config.productTableColumns;
  orderColumns: ITableColumn[] = this.config.orderTableColumns;
  billColumns: ITableColumn[] = this.config.billTableColumns;

  customerList$: Observable<Customer[]> = this.customerService.getAll();
  productList$: Observable<Product[]> = this.productService.getAll();
  orderList$: Observable<Order[]> = this.orderService.getAll();
  billList$: Observable<Bill[]> = this.billService.getAll();

  constructor(
    private config: ConfigService,
    private customerService: CustomerService,
    private productService: ProductService,
    private orderService: OrderService,
    private billService: BillService
  ) {}

  ngOnInit(): void {}
}
