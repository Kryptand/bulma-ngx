import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Sanitizer,
  SecurityContext,ChangeDetectionStrategy
} from '@angular/core';
import { NotificationViewModel } from '../../models/notification.view-model';
import { NotifierOptionsModel } from '../../models/notifier-options.model';

@Component({
  selector: 'bulma-notification',
  templateUrl: './notification.component.html',
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {
  @Input() notification: NotificationViewModel;
  @Input() notifierOptions: NotifierOptionsModel;
  @Output()
  closeNotification: EventEmitter<string> = new EventEmitter<string>();
  timeout: any;
  styles: any;

  constructor(private sanitizer: Sanitizer) {}

  ngOnInit() {
    this.notification.content = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.notification.content
    );
    this.autoHide();
  }

  autoHide() {
    if (this.notifierOptions.behaviour.autoHide) {
      this.timeout = setTimeout(
        () => this.closeNotification.emit(this.notification.id),
        this.notifierOptions.behaviour.autoHide
      );
    }
  }

  cancelHide() {
    clearTimeout(this.timeout);
  }
}
