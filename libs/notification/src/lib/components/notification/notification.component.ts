import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationViewModel } from '../../model/notification.view-model';

@Component({
  selector: 'bulma-ngx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification: NotificationViewModel;
  @Output() closeNotification: EventEmitter<boolean>;
  constructor() {}

  ngOnInit() {}
}
