/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarVerticalComponent } from './navbar-vertical.component';

describe('NavbarVerticalComponent', () => {
  let component: NavbarVerticalComponent;
  let fixture: ComponentFixture<NavbarVerticalComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarVerticalComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
