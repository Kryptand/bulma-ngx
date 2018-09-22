import * as fromNotification from './notification.reducer';
import { NotificationState } from './notification.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectNotificationState = createFeatureSelector<
  fromNotification.NotificationState
>('notification');
export const getNotificationState = createSelector(
  selectNotificationState,
  notifications => notifications
);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromNotification.adapter.getSelectors(getNotificationState);

export const selectNotificationConfig = createSelector(
  getNotificationState,
  (state: NotificationState) => {
    return state.notificationOptions;
  }
);
