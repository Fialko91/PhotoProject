import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPagePortfolioComponent } from './toolbar-page-portfolio.component';

describe('ToolbarPagePortfolioComponent', () => {
  let component: ToolbarPagePortfolioComponent;
  let fixture: ComponentFixture<ToolbarPagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
