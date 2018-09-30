import {
  Directive,
  Input,
  ContentChildren,
  QueryList,
  AfterContentChecked
} from '@angular/core';
import { TabContentDirective } from './tabContent.directive';
import { TabTitleDirective } from './tabTitle.directive';
let tabId = 0;

@Directive({
  selector: 'bulmaTab'
})
export class TabDirective implements AfterContentChecked {
  @Input() id = `bulma-tab-${tabId++}`;
  @Input() disabled = false;
  title: TabTitleDirective | null;
  content: TabContentDirective | null;
  @ContentChildren(TabTitleDirective, { descendants: false })
  titles: QueryList<TabTitleDirective>;
  @ContentChildren(TabContentDirective, { descendants: false })
  contents: QueryList<TabContentDirective>;

  constructor() {}
  ngAfterContentChecked() {
    this.title = this.titles.first;
    this.content = this.contents.first;
  }
}
