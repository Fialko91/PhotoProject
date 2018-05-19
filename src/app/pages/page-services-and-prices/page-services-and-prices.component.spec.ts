import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesAndPricesComponent } from './page-services-and-prices.component';

describe('PageServicesAndPricesComponent', () => {
  let component: PageServicesAndPricesComponent;
  let fixture: ComponentFixture<PageServicesAndPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageServicesAndPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServicesAndPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
