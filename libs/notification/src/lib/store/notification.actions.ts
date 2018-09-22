import { Action } from '@ngrx/store';
import { NotificationViewModel } from '../models/notification.view-model';
import { NotifierConfig } from '../models/notifier-config';

export enum NotificationActionTypes {
  AddNotification = '[Notification] Add Notification',
  AddConfiguration = '[Notification] Add Notification Config',
  AddNotifications = '[Notification] Add Notifications',
  DeleteNotification = '[Notification] Delete Notification',
  DeleteNotifications = '[Notification] Delete Notifications',
  ClearNotifications = '[Notification] Clear Notifications'
}

export class AddNotification implements Action {
  readonly type = NotificationActionTypes.AddNotification;

  constructor(public payload: { notification: NotificationViewModel }) {}
}

export class AddConfiguration implements Action {
  readonly type = NotificationActionTypes.AddConfiguration;

  constructor(public payload: { options: NotifierConfig }) {}
}

export class AddNotifications implements Action {
  readonly type = NotificationActionTypes.AddNotifications;

  constructor(public payload: { notifications: NotificationViewModel[] }) {}
}

export class DeleteNotification implements Action {
  readonly type = NotificationActionTypes.DeleteNotification;

  constructor(public payload: { id: string }) {}
}

export class DeleteNotifications implements Action {
  readonly type = NotificationActionTypes.DeleteNotifications;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearNotifications implements Action {
  readonly type = NotificationActionTypes.ClearNotifications;
}

export type NotificationActions =
  | AddNotification
  | AddNotifications
  | AddConfiguration
  | DeleteNotification
  | DeleteNotifications
  | ClearNotifications;
