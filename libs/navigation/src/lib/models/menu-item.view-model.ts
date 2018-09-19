import { MenuItemAggregateViewModel } from './menu-item-aggregate.view-model';

export interface MenuItemViewModel {
  id?: string;
  class?: string;
  label: string;
  url: string;
  icon?: string;
  subMenuItems: MenuItemAggregateViewModel[];
}
