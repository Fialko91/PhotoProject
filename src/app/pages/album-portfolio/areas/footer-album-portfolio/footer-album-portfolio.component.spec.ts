import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAlbumPortfolioComponent } from './footer-album-portfolio.component';

describe('FooterAlbumPortfolioComponent', () => {
  let component: FooterAlbumPortfolioComponent;
  let fixture: ComponentFixture<FooterAlbumPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAlbumPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAlbumPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
