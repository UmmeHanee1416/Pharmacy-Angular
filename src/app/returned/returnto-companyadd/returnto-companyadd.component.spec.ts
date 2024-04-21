import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturntoCompanyaddComponent } from './returnto-companyadd.component';

describe('ReturntoCompanyaddComponent', () => {
  let component: ReturntoCompanyaddComponent;
  let fixture: ComponentFixture<ReturntoCompanyaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturntoCompanyaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturntoCompanyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
