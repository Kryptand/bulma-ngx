import { Store, Action } from '@bulma-ngx/utility';
import { NotificationOptionsModel } from '../model/notification.view-model';
import {
  ShowNotificationAction,
  HideNotificationAction,
  NotificationWasDisplayedAction,
  HideAllNotificationsAction
} from './notification.actions';

@Store({
  notificationsInQueue: [],
  notifications: []
})
export class NotificationStore {
  @Action(ShowNotificationAction)
  showNotificationAction(state, action: ShowNotificationAction) {
    state.notificationsInQueue = [
      ...state.notificationsInQueue,
      action.payload.notificationOptions
    ];
  }

  @Action(HideNotificationAction, NotificationWasDisplayedAction)
  hideNotificationAction(state, { payload }) {
    state.notificationsInQueue = state.notificationsInQueue.filter(
      notif => notif.id != payload.notificationOptions.id
    );
    state.notifications.push(payload.notificationOptions);
  }
  @Action(HideAllNotificationsAction)
  hideAllNotificationAction(state) {
    state.notificationsInQueue = [];
    state.notifications.push();
  }
}
