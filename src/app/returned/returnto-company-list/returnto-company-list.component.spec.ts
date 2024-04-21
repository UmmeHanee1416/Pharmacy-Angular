import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturntoCompanyListComponent } from './returnto-company-list.component';

describe('ReturntoCompanyListComponent', () => {
  let component: ReturntoCompanyListComponent;
  let fixture: ComponentFixture<ReturntoCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturntoCompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturntoCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
