import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGalleryBlogComponent } from './top-gallery-blog.component';

describe('TopGalleryBlogComponent', () => {
  let component: TopGalleryBlogComponent;
  let fixture: ComponentFixture<TopGalleryBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGalleryBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGalleryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
