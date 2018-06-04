import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fleet1Component } from './fleet1.component';

describe('Fleet1Component', () => {
  let component: Fleet1Component;
  let fixture: ComponentFixture<Fleet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fleet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fleet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
