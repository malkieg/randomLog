import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLinerComponent } from './one-liner.component';

describe('OneLinerComponent', () => {
  let component: OneLinerComponent;
  let fixture: ComponentFixture<OneLinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
