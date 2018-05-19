import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAlbumPortfolioComponent } from './gallery-album-portfolio.component';

describe('GalleryAlbumPortfolioComponent', () => {
  let component: GalleryAlbumPortfolioComponent;
  let fixture: ComponentFixture<GalleryAlbumPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAlbumPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAlbumPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
