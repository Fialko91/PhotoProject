import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPortfolioComponent } from './album-portfolio.component';

describe('AlbumPortfolioComponent', () => {
  let component: AlbumPortfolioComponent;
  let fixture: ComponentFixture<AlbumPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
