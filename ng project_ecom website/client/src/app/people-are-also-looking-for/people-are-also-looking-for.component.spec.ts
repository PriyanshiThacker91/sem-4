import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAreAlsoLookingForComponent } from './people-are-also-looking-for.component';

describe('PeopleAreAlsoLookingForComponent', () => {
  let component: PeopleAreAlsoLookingForComponent;
  let fixture: ComponentFixture<PeopleAreAlsoLookingForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleAreAlsoLookingForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleAreAlsoLookingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
