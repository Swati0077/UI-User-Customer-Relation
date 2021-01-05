import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
loadUsers(): void{
  this.router.navigate(['/users']);
}
loadCustomers(): void{
  this.router.navigate(['/customers']);
}
}
