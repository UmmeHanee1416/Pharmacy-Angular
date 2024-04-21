import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturntoShopAddComponent } from './returnto-shop-add.component';

describe('ReturntoShopAddComponent', () => {
  let component: ReturntoShopAddComponent;
  let fixture: ComponentFixture<ReturntoShopAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturntoShopAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturntoShopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
