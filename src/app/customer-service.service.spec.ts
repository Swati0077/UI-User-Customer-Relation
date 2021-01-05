import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerServiceService } from './customer-service.service';
import { Customers } from './customers/customer.model';

describe('CustomerServiceService', () => {
  let service: CustomerServiceService;
  let httpTestCtrl: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerServiceService]
    });
  });
  beforeEach(() => {
    service = TestBed.get(CustomerServiceService);
    httpTestCtrl = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
