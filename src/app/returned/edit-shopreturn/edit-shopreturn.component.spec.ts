import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopreturnComponent } from './edit-shopreturn.component';

describe('EditShopreturnComponent', () => {
  let component: EditShopreturnComponent;
  let fixture: ComponentFixture<EditShopreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShopreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShopreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
