import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  entityName: string = 'product';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}${this.entityName}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${this.apiUrl}${this.entityName}/${product.id}`,
      product
    );
  }

  delete(product: Product): Observable<Product> {
    return this.http.delete<Product>(
      `${this.apiUrl}${this.entityName}/${product.id}`
    );
  }
}
