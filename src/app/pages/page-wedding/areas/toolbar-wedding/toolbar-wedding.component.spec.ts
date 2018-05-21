import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWeddingComponent } from './toolbar-wedding.component';

describe('ToolbarWeddingComponent', () => {
  let component: ToolbarWeddingComponent;
  let fixture: ComponentFixture<ToolbarWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
