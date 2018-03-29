import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndPricesComponent } from './services-and-prices.component';

describe('ServicesAndPricesComponent', () => {
  let component: ServicesAndPricesComponent;
  let fixture: ComponentFixture<ServicesAndPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAndPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAndPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
