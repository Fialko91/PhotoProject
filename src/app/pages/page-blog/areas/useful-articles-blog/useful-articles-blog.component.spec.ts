import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulArticlesBlogComponent } from './useful-articles-blog.component';

describe('UsefulArticlesBlogComponent', () => {
  let component: UsefulArticlesBlogComponent;
  let fixture: ComponentFixture<UsefulArticlesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulArticlesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulArticlesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
