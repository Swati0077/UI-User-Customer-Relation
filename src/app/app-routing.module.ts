import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'customers' , component: CustomersComponent },
  { path: '' , component: HomeComponent },
  { path: 'users' , component: UsersComponent },
  { path: 'users/:id' , component: UsersComponent },
  { path: 'add/customer' , component: CustomerFormComponent },
  { path: 'customer/edit/:id' , component: CustomerFormComponent },
  { path: 'user/edit/:id' , component: UserFormComponent },
  { path: 'add/user' , component: UserFormComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
