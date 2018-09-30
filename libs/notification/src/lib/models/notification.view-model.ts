import { TemplateRef } from '@angular/core';
import { NotificationComponent } from '../components/notification/notification.component';
import { Guid } from '@bulma-ngx/utility';

export class NotificationViewModel {
  id?: string;
  type: string | 'info' | 'success' | 'warning' | 'error' | 'primary' | 'link';
  content: string;
  display: boolean;
  templateRef?: TemplateRef<any>;
  component: NotificationComponent;
  private issuedAt?: Date;

  constructor() {
    if (this.id == null) {
      this.id = new Guid().toString();
    }
    if (this.issuedAt == null) {
      this.issuedAt = new Date();
    }
  }
}
