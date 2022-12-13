import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'app/model/address';
import { Column } from 'app/model/column';
import { Customer } from 'app/model/customer';
import { AddressesService } from 'app/service/addresses.service';
import { ConfigService } from 'app/service/config.service';
import { CustomerService } from 'app/service/customer.service';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

export class CustomerView {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  fullAddress: string = '';
  active: string = '';

  constructor() { }
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerView[] = [];
  loading: boolean = true;
  columns: Column[] = this.customerService.columns;
  phraseString: string = '';
  lastSelectedColumn: string = '';
  sortDir: string = ''
  displayedColumns: Column[] = [];

  constructor(
    private customerService: CustomerService,
    private addressesService: AddressesService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.update();
    this.displayedColumns = [];
    this.columns.forEach((colunm, index) => {
      colunm.index = index;
      this.displayedColumns.push(colunm);
    });
  }

  onDelete(item: Customer) {
    this.customerService.remove(item).subscribe(i => {});   
    this.update();
  }

  onColumnSelect(colName: string): void {
    if (this.lastSelectedColumn != colName)
      this.columns.forEach(i => i.sortDir = '');

    this.lastSelectedColumn = colName;

    const state = this.customerService.columns.find(i => i.name == colName);
    if (state.sortDir == '')
      state.sortDir = 'up';
    if (state.sortDir == 'none')
      state.sortDir = 'up'
    else if (state.sortDir == 'up')
      state.sortDir = 'down';
    else if (state.sortDir == 'down')
      state.sortDir = 'up'
    this.sortDir = state.sortDir;
  }

  onSearchPhrase(event: Event, colName: string): void {
    this.phraseString = (event.target as HTMLInputElement).value;
    this.lastSelectedColumn = colName;
  }

  update(): void {
    this.reset();
    this.loading = true;
    this.customerService.getAll().pipe(
      finalize(() => {  })
    ).subscribe(() => { });

    let addresses: Address[];
    this.addressesService.getAll().subscribe(adds => {
      addresses = adds;
    });
    const x = setTimeout(() => {
      clearTimeout(x);
      this.customerService.getAll().subscribe(items => {
        items.forEach(item => {
          const customer: CustomerView = new CustomerView();
          let address = addresses.find(elem => elem.id == item.address);
          if(typeof(address) == 'undefined'){
            address = new Address();
            address.country = '';
            address.city = '';
            address.street = '';
          }
          customer.id = item.id;
          customer.firstName = item.firstName;
          customer.lastName = item.lastName;
          customer.fullAddress = `${address.country}, ${address.city}, ${address.street}`;
          customer.email = item.email;
          (item.active == true) ? customer.active = 'Yes' : customer.active = 'True';
          this.customers.push(customer);
          this.loading = false;
        })
      })
    }, this.config.updateDelayTimeMs);
  }

  reset():void{
    this.customers = [];
    this.columns.forEach(i => i.sortDir = '');
    this.phraseString = '';
    this.lastSelectedColumn = '';
    this.sortDir = ''
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray<Column>(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
}


