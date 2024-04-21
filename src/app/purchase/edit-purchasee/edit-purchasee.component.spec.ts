import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseeComponent } from './edit-purchasee.component';

describe('EditPurchaseeComponent', () => {
  let component: EditPurchaseeComponent;
  let fixture: ComponentFixture<EditPurchaseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPurchaseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchaseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
