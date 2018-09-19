import { Input } from '@angular/core';
import { NavBarViewModel } from '../../models/navbar.view-model';

export class AbstractNavbarComponent {
  @Input() navbarViewModel: NavBarViewModel;
  constructor() {}
}
