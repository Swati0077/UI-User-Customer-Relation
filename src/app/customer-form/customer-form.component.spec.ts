import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Customers } from '../customers/customer.model';

import { CustomerFormComponent } from './customer-form.component';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  // tslint:disable-next-line:prefer-const
  let customer: Customers;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule , FormsModule ],
      declarations: [ CustomerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('[Customer-Form submit]' , async(() => {
  //   fixture.whenStable().then(() => {
  //     component.onCreatePost(customer);
  //     fixture.detectChanges();
  //     expect(component.onCreatePost).toHaveBeenCalled();
  //   });
  // }));
});
