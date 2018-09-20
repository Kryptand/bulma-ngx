import { Action } from '@ngrx/store';

export enum NotificationActionTypes {
  ShowNotificationAction = '[Notification] Show',
  HideNotificationAction = '[Notification] Hide',
  NotificationWasDisplayedAction = '[Notification] Was displayed',
  HideAllNotificationsAction = '[Notification] Hide all',
  HideNewestNotificationAction = '[Notification] Hide newest',
  HideOldestNotificationAction = '[Notification] Hide oldest'
}

export class ShowNotificationAction implements Action {
  readonly type = NotificationActionTypes.ShowNotificationAction;
  constructor(public payload: { notificationOptions: NotificationOptions }) {}
}
export class NotificationWasDisplayedAction implements Action {
  readonly type = NotificationActionTypes.NotificationWasDisplayedAction;
  constructor(public payload: { notificationOptions: NotificationOptions }) {}
}
export class HideNotificationAction implements Action {
  readonly type = NotificationActionTypes.HideNotificationAction;
  constructor(public payload: { notificationId: string }) {}
}
export class HideAllNotificationsAction implements Action {
  readonly type = NotificationActionTypes.HideAllNotificationsAction;
  constructor() {}
}
export class HideNewestNotificationAction implements Action {
  readonly type = NotificationActionTypes.HideNewestNotificationAction;
  constructor() {}
}
export class HideOldestNotificationAction implements Action {
  readonly type = NotificationActionTypes.HideOldestNotificationAction;
  constructor() {}
}

export type NotificationActions =
  | ShowNotificationAction
  | NotificationWasDisplayedAction
  | HideNotificationAction
  | HideAllNotificationsAction
  | HideNewestNotificationAction
  | HideOldestNotificationAction;
