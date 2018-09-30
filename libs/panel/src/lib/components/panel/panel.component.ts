import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractTabbedComponent } from '@bulma-ngx/tabs';

@Component({
  selector: 'bulma-panel',
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent extends AbstractTabbedComponent {
  @Input() title: string;
  constructor() {
    super();
  }
}
