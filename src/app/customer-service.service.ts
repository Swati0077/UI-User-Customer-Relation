import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from './customers/customer.model';
import {map} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Users } from './users/users.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
BASE_URL = 'http://127.0.0.1:3000';
    constructor(private http: HttpClient) { }
// POST REQUEST
  createCustomerData(name: string, website: string, address: string ): void{
    const data: Customers = {name, website, address };
    this.http
      .post(
         'http://127.0.0.1:3000/customers',
        // this.BASE_URL + 'customers',
        data
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  // GET REQUEST
  fetchCustomerData(): Observable<Customers[]>{
    return this.http.get<Customers[]>('http://127.0.0.1:3000/customers');
  }
  // DELETE REQUEST
  deleteCustomerData(id: string): Observable<Customers[]>{
    return this.http.delete<Customers[]>('http://127.0.0.1:3000/customers/' + id);
  }
  // UPDATE REQUEST
  updateCustomerData(id: number, data): Observable<any>{
   return this.http.patch('http://127.0.0.1:3000/customers/' + id, data);
  }
  showUserAssociatedwithCustomer(id: number): Observable<Users[]>{
    return this.http.get<Users[]>(`http://127.0.0.1:3000/customers/${id}/users`);
  }
}
