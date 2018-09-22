import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, NotificationState } from './notification.reducer';

export const selectNotificationState = createFeatureSelector<NotificationState>(
  'notification'
);
export const getNotificationState = createSelector(
  selectNotificationState,
  notifications => notifications
);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getNotificationState);

export const selectNotificationConfig = createSelector(
  getNotificationState,
  (state: NotificationState) => {
    return state.notificationOptions;
  }
);
