import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWeddingComponent } from './footer-wedding.component';

describe('FooterWeddingComponent', () => {
  let component: FooterWeddingComponent;
  let fixture: ComponentFixture<FooterWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
