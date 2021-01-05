import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Users } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserServiceService , private router: Router,
              private router1: ActivatedRoute) { }
  users: Users[] = [];
  userId;

  ngOnInit(): void {
    this.userService.fetchUserData().subscribe(userData => {
      this.users = userData;
    }, (err) => {
      console.log(err);
    }, () => {
      this.router1.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')){
          this.userId = paramMap.get('id');
          this.users = this.users.filter(p => p.customerId == this.userId);
        }
});
});
  }
  onFetchUsers(): void {
    // Send Http request
    this.userService.fetchUserData();
  }
  onAddUser(): void{
    this.router.navigate(['/add/user']);
  }
  editUsers(id): void{
    // this.users = this.users.filter(p => p.id == id);
  }
  onDeleteUser(id): void{
    this.userService.deleteUserData(id).subscribe(() => {
      const updated = this.users.filter(data => data.id !== id);
      this.users = updated;
    });
  }

}
