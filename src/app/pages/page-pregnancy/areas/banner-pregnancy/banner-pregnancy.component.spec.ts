import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPregnancyComponent } from './banner-pregnancy.component';

describe('BannerPregnancyComponent', () => {
  let component: BannerPregnancyComponent;
  let fixture: ComponentFixture<BannerPregnancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPregnancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
