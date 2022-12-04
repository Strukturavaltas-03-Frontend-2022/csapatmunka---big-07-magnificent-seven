import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl: string = environment.apiUrl;

  entityName: string = 'orders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}${this.entityName}`, order);
  }

  update(order: Order): Observable<Order> {
    return this.http.patch<Order>(
      `${this.apiUrl}${this.entityName}/${order.id}`,
      order
    );
  }

  delete(order: Order): Observable<Order> {
    return this.http.delete<Order>(
      `${this.apiUrl}${this.entityName}/${order.id}`
    );
  }
}
