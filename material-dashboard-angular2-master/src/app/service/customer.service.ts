import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Column } from 'app/model/column';
import { Customer } from 'app/model/customer';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService extends BaseService<Customer> {
  constructor(httpClient: HttpClient, config: ConfigService) {
    super(config, httpClient, "customer");
  }

  columns: Column[] = [
    { index: 0, name: 'id', title: '#', type: 'text', sortDir: '', footer: false },
    { index: 1, name: 'firstName', title: 'First Name', type: 'text', sortDir: '', footer: false },
    { index: 2, name: 'lastName', title: 'Last Name', type: 'text', sortDir: '', footer: false },
    { index: 3, name: 'fullAddress', title: 'Address', type: 'text', sortDir: '', footer: false },
    { index: 4, name: 'email', title: 'Email', type: 'text', sortDir: '', footer: false },
    { index: 5, name: 'active', title: 'Active', type: 'text', sortDir: '', footer: false },
  ]
}