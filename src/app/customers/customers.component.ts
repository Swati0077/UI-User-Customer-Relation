import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customers} from './customer.model';
import { CustomerServiceService } from '../customer-service.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Users } from '../users/users.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

   customer: Customers[] = [];
   CustomersUser: Users[] = [];
   getPost = false;

  constructor(private http: HttpClient, private customerService: CustomerServiceService, private router: Router) {
 }
  ngOnInit(): void {
    this.customerService.fetchCustomerData().subscribe(data => {
      this.customer = data;
    });
  }
  onAddCustomer(): void{
    this.router.navigate(['/add/customer']);
  }
  onEditCustomer(id: string): void{

  }
  onDeleteCustomer(id: string): void{
    this.customerService.deleteCustomerData(id).subscribe(() => {
      const updated = this.customer.filter(data => data.id !== id);
      this.customer = updated;
      // this.updatedUser.next([...this.customer]);
    });
  }

  onFetchPosts(): void {
    // Send Http request
   this.customerService.fetchCustomerData();
    }
  // }
  showUsers(id: string): void {
    // this.customerService.showUserAssociatedwithCustomer(+id).subscribe((data) => {
    //   console.log(data);
    //   this.CustomersUser = data;
    // });
  }
}
