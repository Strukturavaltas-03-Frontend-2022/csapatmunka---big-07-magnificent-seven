import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = environment.apiUrl;

  entityName: string = 'customers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      `${this.apiUrl}${this.entityName}`,
      customer
    );
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(
      `${this.apiUrl}${this.entityName}/${customer.id}`,
      customer
    );
  }

  delete(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(
      `${this.apiUrl}${this.entityName}/${customer.id}`
    );
  }
}
