import { Injectable } from '@angular/core';
import { Category } from '../model/category';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  customerTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'First Name', key: 'firstName' },
    { title: 'LastName', key: 'lastName' },
    { title: 'email', key: 'email' },
    { title: 'Address', key: 'address' },
    { title: 'Active', key: 'active' },
  ];
  productTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Category ID', key: 'catID' },
    { title: 'Type', key: 'type' },
    { title: 'Description', key: 'description' },
    { title: 'Price', key: 'price' },
    { title: 'Featured', key: 'featured' },
    { title: 'Active', key: 'active' },
  ];
  orderTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Customer ID', key: 'customerID' },
    { title: 'Product ID', key: 'productID' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
  ];
  billTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Order ID', key: 'orderID' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
  ];

  categoryList: Category[] = [
    {
      id: 1,
      name: 'Documentary',
      description:
        'A documentary film or documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education or maintaining a historical record"',
    },
    {
      id: 2,
      name: 'Comedy',
      description:
        'A comedy film is a category of film which emphasizes humor.',
    },
    {
      id: 3,
      name: 'Adventure',
      description:
        'Adventure film is a type of film that usually presents danger, or gives the viewer a sense of excitement.',
    },
  ];
}
