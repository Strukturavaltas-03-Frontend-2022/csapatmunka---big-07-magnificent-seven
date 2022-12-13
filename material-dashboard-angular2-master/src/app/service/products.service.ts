import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/model/product';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';
import { Column } from 'app/model/column';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  constructor(httpClient: HttpClient, config: ConfigService) {
    super(config, httpClient, "product");
  }

  columns: Column[] = [
    { index: 0, name: 'id', title: '#', type: 'text', sortDir: '',footer:false },
    { index: 1, name: 'name', title: 'Name', type: 'text', sortDir: '',footer:false},
    { index: 2, name: 'type', title: 'Type', type: 'text', sortDir: '',footer:false },
    { index: 3, name: 'catID', title: 'Category', type: 'text', sortDir: '',footer:false },
    { index: 4, name: 'description', title: 'Description', type: 'text', sortDir: '',footer:false },
    { index: 5, name: 'price', title: 'Price', type: 'text', sortDir: '' ,footer:false},
    { index: 6, name: 'featured', title: 'Featured', type: 'text', sortDir: '',footer:false },
    { index: 7, name: 'active', title: 'Active', type: 'text', sortDir: '',footer:false },
  ]
}