import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabDirective } from './directives/tab.directive';
import { TabTitleDirective } from './directives/tabTitle.directive';
import { TabContentDirective } from './directives/tabContent.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabDirective,
    TabTitleDirective,
    TabContentDirective,
    TabGroupComponent
  ],
  exports: [
    TabDirective,
    TabTitleDirective,
    TabContentDirective,
    TabGroupComponent
  ]
})
export class TabsModule {}
