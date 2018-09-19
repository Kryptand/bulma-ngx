import { Component, OnInit, Input } from '@angular/core';
import { AbstractNavbarComponent } from '../abstract-navbar/abstract-navbar.component';

@Component({
  selector: 'bulma-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html'
})
export class NavbarHorizontalComponent extends AbstractNavbarComponent
  implements OnInit {
  @Input() isFixedTop?: boolean;
  constructor() {
    super();
  }

  ngOnInit() {}
}
