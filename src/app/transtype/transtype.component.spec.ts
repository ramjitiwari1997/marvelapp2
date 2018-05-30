import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstypeComponent } from './transtype.component';

describe('TranstypeComponent', () => {
  let component: TranstypeComponent;
  let fixture: ComponentFixture<TranstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
