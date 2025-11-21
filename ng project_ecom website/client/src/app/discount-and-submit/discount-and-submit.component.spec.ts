import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountAndSubmitComponent } from './discount-and-submit.component';

describe('DiscountAndSubmitComponent', () => {
  let component: DiscountAndSubmitComponent;
  let fixture: ComponentFixture<DiscountAndSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountAndSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountAndSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
