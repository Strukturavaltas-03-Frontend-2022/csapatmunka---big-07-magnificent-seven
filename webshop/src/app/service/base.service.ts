import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { [x: string]: any }> {
  apiUrl: string = environment.apiUrl;

  entityName: string = '';

  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  selectedRow$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  constructor(private http: HttpClient) {}

  getAll(): void {
    this.http
      .get<T[]>(`${this.apiUrl}${this.entityName}`)
      .subscribe((dataList) => this.list$.next(dataList));
  }

  get(id: number): void {
    this.http
      .get<T>(`${this.apiUrl}${this.entityName}/${id}`)
      .subscribe((data) => this.selectedRow$.next(data));
  }

  update(entity: T, id: number): void {
    this.http
      .patch<T>(`${this.apiUrl}${this.entityName}/${entity[id]}`, entity)
      .subscribe((data) => this.selectedRow$.next(data));
  }

  delete(id: number): void {
    this.http
      .delete<T>(`${this.apiUrl}${this.entityName}/${id}`)
      .subscribe((data) => {
        this.selectedRow$.next(data);
      });
  }

  //create()
}
