import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturntoShopListComponent } from './returnto-shop-list.component';

describe('ReturntoShopListComponent', () => {
  let component: ReturntoShopListComponent;
  let fixture: ComponentFixture<ReturntoShopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturntoShopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturntoShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
