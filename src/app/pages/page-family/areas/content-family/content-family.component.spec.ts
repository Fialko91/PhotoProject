import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFamilyComponent } from './content-family.component';

describe('ContentFamilyComponent', () => {
  let component: ContentFamilyComponent;
  let fixture: ComponentFixture<ContentFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
