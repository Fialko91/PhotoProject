import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWeddingComponent } from './page-wedding.component';

describe('PageWeddingComponent', () => {
  let component: PageWeddingComponent;
  let fixture: ComponentFixture<PageWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
