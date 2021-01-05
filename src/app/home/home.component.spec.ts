import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import {DebugElement} from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from '../users/users.component';
import { CustomersComponent } from '../customers/customers.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let mockRouter;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,  [RouterTestingModule.withRoutes([
        { path: 'users', component: UsersComponent },
        { path: 'customers', component: CustomersComponent }
    ])], ],
      declarations: [ HomeComponent, UsersComponent , CustomersComponent ],
      providers: [ { provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"LOAD USERS" button is clicked', fakeAsync(() => {
    spyOn(component, 'loadUsers');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.loadUsers).toHaveBeenCalled();
  }));
  it('should go to /users', async(() => {
    fixture.detectChanges();
    component.loadUsers();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/users']);
}));
  it('should go to /customers', async(() => {
  fixture.detectChanges();
  component.loadCustomers();
  expect(mockRouter.navigate).toHaveBeenCalledWith(['/customers']);
}));
  it('"LOAD CUSTOMERS" button is clicked' , fakeAsync(() => {
  spyOn(component, 'loadCustomers');
  const button = fixture.debugElement.nativeElement.querySelector('#customers-btn');
  button.click();
  tick();
  expect(component.loadCustomers).toHaveBeenCalled();
}));
});
