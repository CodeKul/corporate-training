import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOneComponent } from './my-one.component';

describe('MyOneComponent', () => {
  let component: MyOneComponent;
  let fixture: ComponentFixture<MyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
