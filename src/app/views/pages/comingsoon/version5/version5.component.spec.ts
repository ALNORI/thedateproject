import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version5Component } from './version5.component';

describe('Version5Component', () => {
  let component: Version5Component;
  let fixture: ComponentFixture<Version5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
