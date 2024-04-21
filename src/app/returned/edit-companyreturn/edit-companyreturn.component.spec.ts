import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyreturnComponent } from './edit-companyreturn.component';

describe('EditCompanyreturnComponent', () => {
  let component: EditCompanyreturnComponent;
  let fixture: ComponentFixture<EditCompanyreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompanyreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCompanyreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
