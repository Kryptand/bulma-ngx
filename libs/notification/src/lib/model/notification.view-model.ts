import { TemplateRef } from '@angular/core';
import { NotificationComponent } from '../components/notification/notification.component';
import { Guid } from '@bulma-ngx/utility';

export class NotificationViewModel {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'link';
  content: string;
  templateRef?: TemplateRef<any>;
  options: NotificationOptionsModel;
  component: NotificationComponent;
  constructor(options: NotificationOptionsModel) {
    Object.assign(this, options);
    if (options.id == null) {
      return;
    }
    this.id = new Guid().toString();
  }
}
export interface NotificationOptionsModel {
  id?: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'link';
  content: string;
  templateRef?: TemplateRef<any>;
}
