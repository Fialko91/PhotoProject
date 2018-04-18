import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBlogComponent } from './toolbar-blog.component';

describe('ToolbarBlogComponent', () => {
  let component: ToolbarBlogComponent;
  let fixture: ComponentFixture<ToolbarBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
