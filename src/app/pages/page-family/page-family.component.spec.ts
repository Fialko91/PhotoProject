import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFamilyComponent } from './page-family.component';

describe('PageFamilyComponent', () => {
  let component: PageFamilyComponent;
  let fixture: ComponentFixture<PageFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
