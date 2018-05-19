import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServicesPricesComponent } from './footer-services-prices.component';

describe('FooterServicesPricesComponent', () => {
  let component: FooterServicesPricesComponent;
  let fixture: ComponentFixture<FooterServicesPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterServicesPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterServicesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
