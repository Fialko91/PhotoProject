import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPagePortfolioComponent } from './footer-page-portfolio.component';

describe('FooterPagePortfolioComponent', () => {
  let component: FooterPagePortfolioComponent;
  let fixture: ComponentFixture<FooterPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
