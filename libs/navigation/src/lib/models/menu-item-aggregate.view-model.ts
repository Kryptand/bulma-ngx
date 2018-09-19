import { MenuItemViewModel } from './menu-item.view-model';

export interface MenuItemAggregateViewModel {
  aggregateName?: string;
  menuItems: MenuItemViewModel[];
}
