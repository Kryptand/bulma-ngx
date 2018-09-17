import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbContainerComponent } from './containers/breadcrumb-container/breadcrumb-container.component';
import { BreadcrumbItemComponent } from './components/breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbService } from './services/breadcrumb.service';
import { RouterModule } from '../../../../node_modules/@angular/router';

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
