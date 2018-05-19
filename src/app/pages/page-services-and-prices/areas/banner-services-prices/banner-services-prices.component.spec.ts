import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerServicesPricesComponent } from './banner-services-prices.component';

describe('BannerServicesPricesComponent', () => {
  let component: BannerServicesPricesComponent;
  let fixture: ComponentFixture<BannerServicesPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerServicesPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerServicesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
