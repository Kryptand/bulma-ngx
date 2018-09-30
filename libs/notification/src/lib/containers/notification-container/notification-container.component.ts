import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { NotificationViewModel } from '../../models/notification.view-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAll,
  selectNotificationConfig
} from '../../store/notification.selectors';
import { NotifierConfig } from '../../models/notifier-config';
import { DeleteNotification } from '../../store/notification.actions';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationState } from '../../store/notification.reducer';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit, OnDestroy {
  notifications$: Observable<NotificationViewModel[]>;
  config$: Observable<NotifierConfig>;
  notifierOptions: NotifierConfig;
  styles: {};
  sub: Subscription;

  constructor(private store: Store<NotificationState>) {}

  ngOnInit(): void {
    this.notifications$ = this.store.select(selectAll);
    this.config$ = this.store.select(selectNotificationConfig);
    this.sub = this.config$.subscribe(value => (this.notifierOptions = value));
    this.styles = this.buildStyleString();
  }

  removeNotification(id: string) {
    this.store.dispatch(new DeleteNotification({ id: id }));
  }

  buildStyleString() {
    const notificationStyle = [];
    const horizontalDistance = this.notifierOptions.position.horizontal
      .distance;
    const verticalDistance = this.notifierOptions.position.vertical.distance;
    switch (this.notifierOptions.position.horizontal.position) {
      case 'left':
        notificationStyle['left'] = horizontalDistance + 'px';
        break;
      case 'right':
        notificationStyle['right'] = horizontalDistance + 'px';
        break;
      case 'middle':
        notificationStyle['left'] = '50%';
        notificationStyle['transform'] = 'translate(-50%, 0)';
        break;
    }
    switch (this.notifierOptions.position.vertical.position) {
      case 'top':
        notificationStyle['top'] = verticalDistance + 'px';
        break;
      case 'bottom':
        notificationStyle['bottom'] = verticalDistance + 'px';
    }
    return notificationStyle;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
