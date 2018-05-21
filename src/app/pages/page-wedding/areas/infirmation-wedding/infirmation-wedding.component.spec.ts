import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmationWeddingComponent } from './infirmation-wedding.component';

describe('InfirmationWeddingComponent', () => {
  let component: InfirmationWeddingComponent;
  let fixture: ComponentFixture<InfirmationWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfirmationWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmationWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
