import { Component, OnInit } from '@angular/core';
import { NotificationViewModel } from '../../models/notification.view-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NotificationState } from '../../store/notification.reducer';
import {
  selectAll,
  selectNotificationConfig
} from '../../store/notification.selectors';
import { NotifierConfig } from '../../models/notifier-config';
import { DeleteNotification } from '../../store/notification.actions';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'bulma-notification-container',
  templateUrl: './notification-container.component.html',
  animations: [
    trigger('easeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '1s ease-in-out',
          style({
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(
          '1s ease-in-out',
          style({
            opacity: 0
          })
        )
      ])
    ])
  ],
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {
  notifications$: Observable<NotificationViewModel[]>;
  config$: Observable<NotifierConfig>;

  constructor(private store: Store<NotificationState>) {}

  ngOnInit(): void {
    this.notifications$ = this.store.select(selectAll);
    this.config$ = this.store.select(selectNotificationConfig);
  }

  removeNotification(id: string) {
    this.store.dispatch(new DeleteNotification({ id: id }));
  }
}
