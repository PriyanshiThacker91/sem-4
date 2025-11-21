import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDeliveryDailyOffersFooterComponent } from './free-delivery-daily-offers-footer.component';

describe('FreeDeliveryDailyOffersFooterComponent', () => {
  let component: FreeDeliveryDailyOffersFooterComponent;
  let fixture: ComponentFixture<FreeDeliveryDailyOffersFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeDeliveryDailyOffersFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDeliveryDailyOffersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
