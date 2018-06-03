import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLoveStoryComponent } from './content-love-story.component';

describe('ContentLoveStoryComponent', () => {
  let component: ContentLoveStoryComponent;
  let fixture: ComponentFixture<ContentLoveStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLoveStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLoveStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
