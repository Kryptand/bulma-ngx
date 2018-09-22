import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import {
  NotificationActions,
  NotificationActionTypes
} from './notification.actions';
import { NotificationViewModel } from '../models/notification.view-model';
import { NotifierConfig } from '../models/notifier-config';

export interface NotificationState extends EntityState<NotificationViewModel> {
  notificationOptions: NotifierConfig;
}

export const adapter: EntityAdapter<
  NotificationViewModel
> = createEntityAdapter<NotificationViewModel>();

export const initialState: NotificationState = adapter.getInitialState({
  notificationOptions: new NotifierConfig()
});

export function notificationReducer(
  state = initialState,
  action: NotificationActions
): NotificationState {
  switch (action.type) {
    case NotificationActionTypes.AddNotification: {
      return adapter.addOne(action.payload.notification, state);
    }

    case NotificationActionTypes.AddNotifications: {
      return adapter.addMany(action.payload.notifications, state);
    }

    case NotificationActionTypes.DeleteNotification: {
      return adapter.removeOne(action.payload.id, state);
    }

    case NotificationActionTypes.DeleteNotifications: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case NotificationActionTypes.ClearNotifications: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
