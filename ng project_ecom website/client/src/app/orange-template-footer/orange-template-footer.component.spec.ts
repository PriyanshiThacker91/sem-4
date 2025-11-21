import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeTemplateFooterComponent } from './orange-template-footer.component';

describe('OrangeTemplateFooterComponent', () => {
  let component: OrangeTemplateFooterComponent;
  let fixture: ComponentFixture<OrangeTemplateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeTemplateFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeTemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
