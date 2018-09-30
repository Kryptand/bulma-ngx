import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { StyleTypes } from '@bulma-ngx/utility';
import { AbstractTabbedComponent } from '../contracts/abstract-tabbed-component';

@Component({
  selector: 'bulma-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent extends AbstractTabbedComponent
  implements OnInit {
  @Input() size?: 'small' | 'medium' | 'large';
  @Input() styles?: StyleTypes[];
  cssClasses: string;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.cssClasses = this.buildClassString();
  }
  buildClassString(): string {
    let styleString = '';
    if (this.styles !== null) {
      this.styles.forEach(style => {
        styleString += `is-${style} `;
      });
    }
    if (this.size !== null) {
      styleString += `is-${this.size}`;
    }
    return styleString;
  }
}
