import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbItemComponent } from './components/breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbContainerComponent } from './containers/breadcrumb-container/breadcrumb-container.component';
import { BreadcrumbService } from './services/breadcrumb.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbItemComponent, BreadcrumbContainerComponent],
  exports: [BreadcrumbContainerComponent]
})
export class BreadcrumbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }
}
