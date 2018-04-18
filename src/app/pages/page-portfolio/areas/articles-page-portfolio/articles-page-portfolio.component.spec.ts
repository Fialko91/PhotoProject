import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPagePortfolioComponent } from './articles-page-portfolio.component';

describe('ArticlesPagePortfolioComponent', () => {
  let component: ArticlesPagePortfolioComponent;
  let fixture: ComponentFixture<ArticlesPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
