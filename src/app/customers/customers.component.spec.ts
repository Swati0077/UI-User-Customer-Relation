import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CustomerFormComponent } from '../customer-form/customer-form.component';


describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let mockRouter;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        [RouterTestingModule.withRoutes([
          { path: 'addCustomer', component: CustomersComponent }
      ])], ],
      declarations: [ CustomersComponent , CustomerFormComponent],
      providers: [ { provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('"ADD CUSTOMERS" button is clicked', fakeAsync(() => {
    spyOn(component, 'onAddCustomer');
    const button = fixture.debugElement.nativeElement.querySelector('#add-customer');
    button.click();
    tick();
    expect(component.onAddCustomer).toHaveBeenCalled();
  }));
  it('should go to /addCustomer', async(() => {
    fixture.detectChanges();
    component.onAddCustomer();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/addCustomer']);
}));
});
