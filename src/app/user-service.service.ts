import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Users } from './users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  postUserData( firstNam: string, middle: string, last: string, emai: string, phone: string, r: string,
                customer: number, address: string,
                ): void{
              const data: Users = {
                firstName: firstNam,
                middleName: middle,
                lastName: last,
                email: emai,
                phoneNumber: phone,
                role: r,
                Address: address,
                customerId: customer
              };
              this.http.post(
        'http://127.0.0.1:3000/users',
        data
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  // GET REQUEST
  fetchUserData(): Observable<Users[]>{
    return  this.http.get<Users[]>('http://127.0.0.1:3000/users');
   }
   // UPDATE REQUEST
  updateUserData(id: number, data): Observable<any>{
    return this.http.patch('http://127.0.0.1:3000/users/' + id, data);
   }
   deleteUserData(id): Observable<any> {
     return this.http.delete('http://127.0.0.1:3000/users/' + id);
    }
}
