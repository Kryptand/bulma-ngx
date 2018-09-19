import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarHorizontalComponent } from './components/navbar-horizontal/navbar-horizontal.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NavbarContainerComponent } from './containers/navbar-container/navbar-container.component';
import { NavigationService } from './services/navigation.service';

const NAVIGATION_COMPONENTS = [
  NavbarHorizontalComponent,
  NavbarVerticalComponent,
  NavbarContainerComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: NAVIGATION_COMPONENTS,
  declarations: NAVIGATION_COMPONENTS
})
export class NavigationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [NavigationService]
    };
  }
}
