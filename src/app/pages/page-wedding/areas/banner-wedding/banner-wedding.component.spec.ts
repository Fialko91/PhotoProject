import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWeddingComponent } from './banner-wedding.component';

describe('BannerWeddingComponent', () => {
  let component: BannerWeddingComponent;
  let fixture: ComponentFixture<BannerWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
