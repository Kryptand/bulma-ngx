import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarHorizontalComponent } from './navbar-horizontal.component';

describe('NavbarHorizontalComponent', () => {
  let comp: NavbarHorizontalComponent;
  let fixture: ComponentFixture<NavbarHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarHorizontalComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(NavbarHorizontalComponent);
    comp = fixture.componentInstance;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
