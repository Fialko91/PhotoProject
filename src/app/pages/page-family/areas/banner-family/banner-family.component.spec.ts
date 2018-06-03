import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFamilyComponent } from './banner-family.component';

describe('BannerFamilyComponent', () => {
  let component: BannerFamilyComponent;
  let fixture: ComponentFixture<BannerFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
