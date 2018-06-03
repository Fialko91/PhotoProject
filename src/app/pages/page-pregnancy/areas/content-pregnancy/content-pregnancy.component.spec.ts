import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPregnancyComponent } from './content-pregnancy.component';

describe('ContentPregnancyComponent', () => {
  let component: ContentPregnancyComponent;
  let fixture: ComponentFixture<ContentPregnancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPregnancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
