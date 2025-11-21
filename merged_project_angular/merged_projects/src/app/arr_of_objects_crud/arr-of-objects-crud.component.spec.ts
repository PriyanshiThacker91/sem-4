import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrOfObjectsCrudComponent } from './arr-of-objects-crud.component';

describe('ArrOfObjectsCrudComponent', () => {
  let component: ArrOfObjectsCrudComponent;
  let fixture: ComponentFixture<ArrOfObjectsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrOfObjectsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrOfObjectsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
