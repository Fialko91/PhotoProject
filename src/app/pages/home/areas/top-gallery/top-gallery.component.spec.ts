import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGalleryComponent } from './top-gallery.component';

describe('TopGalleryComponent', () => {
  let component: TopGalleryComponent;
  let fixture: ComponentFixture<TopGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
