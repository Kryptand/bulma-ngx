import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';

@NgModule( {
  imports: [CommonModule],
  declarations: [TabComponent, TabGroupComponent],
  exports: [TabComponent, TabGroupComponent]
} )
export class TabsModule {
}
