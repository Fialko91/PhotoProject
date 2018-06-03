import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLoveStoryComponent } from './banner-love-story.component';

describe('BannerLoveStoryComponent', () => {
  let component: BannerLoveStoryComponent;
  let fixture: ComponentFixture<BannerLoveStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerLoveStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLoveStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
