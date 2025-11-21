import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAndDiscountComponent } from './sale-and-discount.component';

describe('SaleAndDiscountComponent', () => {
  let component: SaleAndDiscountComponent;
  let fixture: ComponentFixture<SaleAndDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleAndDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleAndDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
