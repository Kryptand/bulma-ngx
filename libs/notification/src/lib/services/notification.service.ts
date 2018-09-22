import { Injectable } from '@angular/core';
import { NotificationViewModel } from '../models/notification.view-model';
import { NotificationState } from '../store/notification.reducer';
import {
  AddConfiguration,
  AddNotification,
  ClearNotifications
} from '../store/notification.actions';
import { Store } from '@ngrx/store';
import { NotifierConfig } from '../models/notifier-config';

@Injectable()
export class NotificationService {
  constructor(private store: Store<NotificationState>) {}

  setNotificationOptions(notificationOptions: NotifierConfig): void {
    this.store.dispatch(new AddConfiguration({ options: notificationOptions }));
  }

  addNotification(notification: NotificationViewModel): void {
    this.store.dispatch(new AddNotification({ notification: notification }));
  }

  clearNotifications(): void {
    this.store.dispatch(new ClearNotifications());
  }
}
