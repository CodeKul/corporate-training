import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerySimpleComponent } from './very-simple.component';

describe('VerySimpleComponent', () => {
  let component: VerySimpleComponent;
  let fixture: ComponentFixture<VerySimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerySimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerySimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
