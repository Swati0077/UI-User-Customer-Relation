import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule ],
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('"ADD USERS" button is clicked', fakeAsync(() => {
    spyOn(component, 'onAddUser');
    const button = fixture.debugElement.nativeElement.querySelector('#add-user');
    button.click();
    tick();
    expect(component.onAddUser).toHaveBeenCalled();
  }));
  it('"FETCH USERS" button is clicked', fakeAsync(() => {
    spyOn(component, 'onFetchUsers');
    const button = fixture.debugElement.nativeElement.querySelector('#fetch-user');
    button.click();
    tick();
    expect(component.onFetchUsers).toHaveBeenCalled();
  }));

});
