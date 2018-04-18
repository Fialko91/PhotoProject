import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPagePortfolioComponent } from './portfolio-page-portfolio.component';

describe('PortfolioPagePortfolioComponent', () => {
  let component: PortfolioPagePortfolioComponent;
  let fixture: ComponentFixture<PortfolioPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
