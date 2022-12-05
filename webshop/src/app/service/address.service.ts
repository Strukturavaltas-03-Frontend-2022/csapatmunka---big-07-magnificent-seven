// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Address } from '../model/address';

// @Injectable({
//   providedIn: 'root',
// })
// export class AddressService {
//   apiUrl: string = environment.apiUrl;

//   entityName: string = 'addresses';

//   constructor(private http: HttpClient) {}

//   getAll(): Observable<Address[]> {
//     return this.http.get<Address[]>(`${this.apiUrl}${this.entityName}`);
//   }

//   get(id: number): Observable<Address> {
//     return this.http.get<Address>(`${this.apiUrl}${this.entityName}/${id}`);
//   }

//   create(address: Address): Observable<Address> {
//     return this.http.post<Address>(`${this.apiUrl}${this.entityName}`, address);
//   }

//   update(address: Address): Observable<Address> {
//     return this.http.patch<Address>(
//       `${this.apiUrl}${this.entityName}/${address.id}`,
//       address
//     );
//   }

//   delete(address: Address): Observable<Address> {
//     return this.http.delete<Address>(
//       `${this.apiUrl}${this.entityName}/${address.id}`
//     );
//   }
// }
