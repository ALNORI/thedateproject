import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version6Component } from './version6.component';

describe('Version6Component', () => {
  let component: Version6Component;
  let fixture: ComponentFixture<Version6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
