import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractNavbarComponent } from './abstract-navbar.component';

describe('AbstractNavbarComponent', () => {
  let component: AbstractNavbarComponent;
  let fixture: ComponentFixture<AbstractNavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AbstractNavbarComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
