import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGalleryPagePortfolioComponent } from './top-gallery-page-portfolio.component';

describe('TopGalleryPagePortfolioComponent', () => {
  let component: TopGalleryPagePortfolioComponent;
  let fixture: ComponentFixture<TopGalleryPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGalleryPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGalleryPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
