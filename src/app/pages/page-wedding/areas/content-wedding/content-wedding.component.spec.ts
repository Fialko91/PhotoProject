import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWeddingComponent } from './content-wedding.component';

describe('ContentWeddingComponent', () => {
  let component: ContentWeddingComponent;
  let fixture: ComponentFixture<ContentWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
