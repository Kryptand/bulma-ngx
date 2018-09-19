import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NavBarViewModel } from '../models/navbar.view-model';
import { MenuItemAggregateViewModel } from '../models/menu-item-aggregate.view-model';

@Injectable()
export class NavigationService {
  private navbar$: BehaviorSubject<NavBarViewModel>;
  set(navBarViewModel: NavBarViewModel) {
    this.navbar$.next(navBarViewModel);
  }
  appendMenuItemAggregate(menuAggregate: MenuItemAggregateViewModel) {
    const currMenuItems = this.navbar$.getValue();
    currMenuItems.menuItems.push(menuAggregate);
    this.navbar$.next(currMenuItems);
  }
  getMenuItems(): Observable<NavBarViewModel> {
    return this.navbar$.asObservable();
  }
  constructor() {}
}
