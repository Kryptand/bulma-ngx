import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterContentChecked,
  ChangeDetectionStrategy
} from '@angular/core';
import { TabDirective } from '../../directives/tab.directive';
export interface TabChangeEvent {
  activeId: string;
  nextId: string;
  preventDefault: () => void;
}
export abstract class AbstractTabbedComponent implements AfterContentChecked {
  @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;
  @Input() activeId: string;
  @Input() destroyOnHide = true;
  @Output() tabChange = new EventEmitter<TabChangeEvent>();

  select(tabId: string) {
    const selectedTab = this._getTabById(tabId);
    if (
      selectedTab &&
      !selectedTab.disabled &&
      this.activeId !== selectedTab.id
    ) {
      let defaultPrevented = false;

      this.tabChange.emit({
        activeId: this.activeId,
        nextId: selectedTab.id,
        preventDefault: () => {
          defaultPrevented = true;
        }
      });

      if (!defaultPrevented) {
        this.activeId = selectedTab.id;
      }
    }
  }

  ngAfterContentChecked() {
    const activeTab = this._getTabById(this.activeId);
    this.activeId = activeTab
      ? activeTab.id
      : this.tabs.length ? this.tabs.first.id : null;
  }

  private _getTabById(id: string): TabDirective {
    const tabsWithId: TabDirective[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }
}
