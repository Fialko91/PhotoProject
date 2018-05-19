import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarAlbumPortfolioComponent } from './toolbar-album-portfolio.component';

describe('ToolbarAlbumPortfolioComponent', () => {
  let component: ToolbarAlbumPortfolioComponent;
  let fixture: ComponentFixture<ToolbarAlbumPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarAlbumPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarAlbumPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
