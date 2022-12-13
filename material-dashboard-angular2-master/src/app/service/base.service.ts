import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  entityName: string = '';

  constructor(
    public config: ConfigService,
    public http: HttpClient,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): Observable<T[]> {

    return this.http.get<T[]>(`${this.config.apiUrl}/${this.entityName}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.config.apiUrl}/${this.entityName}`,
      entity)
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity.id}`,
      entity
    );
  }

  remove(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity.id}`,
    );
  }

}



