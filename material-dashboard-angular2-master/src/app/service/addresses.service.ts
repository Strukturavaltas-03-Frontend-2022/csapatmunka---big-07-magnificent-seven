import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'app/model/address';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';
import { Column } from 'app/model/column';


@Injectable({
  providedIn: 'root'
})
export class AddressesService extends BaseService<Address> {
  constructor(httpClient: HttpClient, config: ConfigService) {
    super(config, httpClient, "address");
  }

  columns: Column[] = [
    { index: 0, name: 'id', title: '#', type: 'text', sortDir: '', footer: false },
    { index: 1, name: 'zip', title: 'Zip', type: 'text', sortDir: '', footer: false },
    { index: 2, name: 'country', title: 'Country', type: 'text', sortDir: '', footer: false },
    { index: 3, name: 'city', title: 'City', type: 'text', sortDir: '', footer: false },
    { index: 4, name: 'street', title: 'Street', type: 'text', sortDir: '', footer: false },
    { index: 5, name: 'notes', title: 'Notes', type: 'text', sortDir: '', footer: false },
  ]
}

