import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '@bulma-ngx/tabs';
import { PanelComponent } from './components/panel/panel.component';

@NgModule( {
  imports: [CommonModule,TabsModule],
  exports:[PanelComponent],
  declarations:[PanelComponent]
} )
export class PanelModule{}
