import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  OnInit
} from '@angular/core';
import { TabHeaderComponent } from '../tab-header/tab-header.component';

@Component({
  selector: 'bulma-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit, AfterContentInit {
  @HostBinding('class') classes = 'tabs';
  @ContentChildren(TabHeaderComponent) tabs: TabHeaderComponent[];
  activeTabId: string;

  constructor() {}

  ngAfterContentInit() {
    console.debug(this.tabs);
    this.tabs.forEach(tab => {
      tab.activeStateChanged.subscribe(event => {
        this.activeTabId = tab.tabId;
        this.tabActiveStateChanged();
      });
    });
  }

  tabActiveStateChanged() {
    console.debug(this.activeTabId);
    this.tabs.filter(x => x.tabId !== this.activeTabId).forEach(elem => {
      console.debug(elem);
      elem.isActive = false;
    });
    const activeTab = this.tabs.find(x => x.tabId === this.activeTabId);
    if (activeTab) {
      activeTab.isActive = true;
    }
  }

  ngOnInit() {}
}
