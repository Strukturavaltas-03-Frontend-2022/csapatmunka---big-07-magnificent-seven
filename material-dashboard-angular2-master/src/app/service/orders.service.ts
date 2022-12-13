import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from 'app/model/order';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { Column } from 'app/model/column';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {
  constructor(httpClient: HttpClient, config: ConfigService) {
    super(config, httpClient, "order");
  }

  columns: Column[] = [
    { index: 0, name: 'id', title: '#', type: 'text', sortDir: '', footer: false },
    { index: 1, name: 'customerID', title: 'Customer ID', type: 'text', sortDir: '', footer: false },
    { index: 2, name: 'productID', title: 'Product ID', type: 'text', sortDir: '', footer: false },
    { index: 3, name: 'amount', title: 'Amount', type: 'text', sortDir: '', footer: true },
    { index: 4, name: 'status', title: 'Status', type: 'text', sortDir: '', footer: false },
  ]
}
