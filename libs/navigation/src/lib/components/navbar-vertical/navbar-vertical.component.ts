import { Component, OnInit } from '@angular/core';
import { AbstractNavbarComponent } from '../abstract-navbar/abstract-navbar.component';

@Component({
  selector: 'bulma-navbar-vertical',
  templateUrl: './navbar-vertical.component.html'
})
export class NavbarVerticalComponent extends AbstractNavbarComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
