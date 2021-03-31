import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version4Component } from './version4.component';

describe('Version4Component', () => {
  let component: Version4Component;
  let fixture: ComponentFixture<Version4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
