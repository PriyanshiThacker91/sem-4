import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRecentBlogComponent } from './our-recent-blog.component';

describe('OurRecentBlogComponent', () => {
  let component: OurRecentBlogComponent;
  let fixture: ComponentFixture<OurRecentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurRecentBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurRecentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
