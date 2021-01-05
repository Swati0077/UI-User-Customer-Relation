import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Users } from '../users/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
user: Users[] = [];
userId;
updatedUserData: Users;
mode: string;
firstName: string;
middleName: string;
lastName: string;
email: string;
phoneNumber: string;
role: string;
customerId: number;
Address: string;
  constructor(private userService: UserServiceService, private router: ActivatedRoute, private router1: Router) { }

  ngOnInit(): void {
    this.userService.fetchUserData().subscribe(data => {
      this.user = data;
    }, (err) => {
      console.log(err);
    }, () => {
      this.router.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')){
          this.userId = paramMap.get('id');
          this.updatedUserData = {...this.user.find(p => p.id == this.userId)};
          this.mode = 'edit';
          this.firstName = this.updatedUserData.firstName;
          this.middleName = this.updatedUserData.middleName;
          this.lastName = this.updatedUserData.lastName;
          this.email = this.updatedUserData.email;
          this.phoneNumber = this.updatedUserData.phoneNumber;
          this.role = this.updatedUserData.role;
          this.customerId = this.updatedUserData.customerId;
          this.Address = this.updatedUserData.Address;
        }
        else{
          this.userId = null;
          this.mode = 'create';
        }
});
    });
  }
   onCreateUser(userData: Users): void{
    if (this.mode === 'create'){
      this.userService.postUserData(userData.firstName,
        userData.middleName, userData.lastName, userData.email, userData.phoneNumber, userData.role, userData.customerId, userData.Address);
    }
    else{
      console.log('hello');
      const d = {
        id : +this.userId,
        firstName : userData.firstName,
        middleName: userData.middleName,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        role: userData.role,
        Address: userData.Address,
        customerId: userData.customerId
      };
      this.userService.updateUserData(+this.userId, d).subscribe(() => {
      });
    }
    this.router1.navigate(['/users']);
  }

}
