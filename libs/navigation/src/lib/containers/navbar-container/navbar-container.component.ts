import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Observable } from 'rxjs/Observable';
import { NavBarViewModel } from '../../models/navbar.view-model';

@Component({
  selector: 'bulma-navbar-container',
  templateUrl: './navbar-container.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarContainerComponent implements OnInit {
  @Input() orientation: 'vertical' | 'horizontal';
  navbar$: Observable<NavBarViewModel>;
  constructor(private navbarService: NavigationService) {}

  ngOnInit() {
    this.navbar$ = this.navbarService.getMenuItems();
  }
}
