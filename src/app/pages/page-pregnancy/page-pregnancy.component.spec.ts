import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePregnancyComponent } from './page-pregnancy.component';

describe('PagePregnancyComponent', () => {
  let component: PagePregnancyComponent;
  let fixture: ComponentFixture<PagePregnancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePregnancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
