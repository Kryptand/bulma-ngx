import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationContainerComponent } from './containers/notification-container/notification-container.component';
import { NotificationComponent } from './components/notification/notification.component';
import { notificationReducer } from './store/notification.reducer';
import { StoreModule } from '@ngrx/store';
import { NotificationService } from '@bulma-ngx/notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('notification', notificationReducer)
  ],
  exports: [NotificationContainerComponent],
  declarations: [NotificationContainerComponent, NotificationComponent]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationModule,
      providers: [NotificationService]
    };
  }
}
