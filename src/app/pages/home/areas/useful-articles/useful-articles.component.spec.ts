import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulArticlesComponent } from './useful-articles.component';

describe('UsefulArticlesComponent', () => {
  let component: UsefulArticlesComponent;
  let fixture: ComponentFixture<UsefulArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
