import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentServicesPricesComponent } from './content-services-prices.component';

describe('ContentServicesPricesComponent', () => {
  let component: ContentServicesPricesComponent;
  let fixture: ComponentFixture<ContentServicesPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentServicesPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentServicesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
