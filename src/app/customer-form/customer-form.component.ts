import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Customers } from '../customers/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private customerService: CustomerServiceService, private router: ActivatedRoute, private router1: Router) { }

customer: Customers[] = [];
userId: string;
updateUserData: Customers;
mode: string;
name: string;
website: string;
address: string;

  ngOnInit(): void {
    this.customerService.fetchCustomerData().subscribe(data => {
      this.customer = data;
      console.log(this.customer);
    }, (err) => {
      console.log(err);
    }, () => {
      this.router.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')){
          this.userId = paramMap.get('id');
          console.log(this.userId);
          this.updateUserData = {...this.customer.find(p => p.id == this.userId)};
          this.mode = 'edit';
          this.name = this.updateUserData.name;
          this.website = this.updateUserData.website;
          this.address = this.updateUserData.address;
          console.log(this.updateUserData.name);
        }
        else{
          this.userId = null;
          this.mode = 'create';
        }
});
    });
    }
  onCreatePost(data: Customers): void {
    console.log(data);
    if (this.mode === 'create'){
      this.customerService.createCustomerData(data.name, data.website, data.address);
    }
    else{
      console.log('hello');

      const d = {
        id: +this.userId,
        name: data.name,
        website: data.website,
        address: data.address,
      };
      this.customerService.updateCustomerData(+this.userId, d).subscribe((dataa: Customers) => {
         console.log(dataa);
      });
    }
    this.router1.navigate(['/customers']);
   }

}
