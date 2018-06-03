import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoveStoryComponent } from './page-love-story.component';

describe('PageLoveStoryComponent', () => {
  let component: PageLoveStoryComponent;
  let fixture: ComponentFixture<PageLoveStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoveStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoveStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
