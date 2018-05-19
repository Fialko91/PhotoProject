import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarServicesPricesComponent } from './toolbar-services-prices.component';

describe('ToolbarServicesPricesComponent', () => {
  let component: ToolbarServicesPricesComponent;
  let fixture: ComponentFixture<ToolbarServicesPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarServicesPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarServicesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
