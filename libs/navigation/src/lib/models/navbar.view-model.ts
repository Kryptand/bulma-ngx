import { MenuItemAggregateViewModel } from './menu-item-aggregate.view-model';

export interface NavBarViewModel {
  brandName?: string;
  brandIcon?: string;
  menuItems: MenuItemAggregateViewModel[];
}
