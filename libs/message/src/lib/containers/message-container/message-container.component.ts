import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bulma-ngx-message-container',
  templateUrl: './message-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageContainerComponent implements OnInit {
  @Input() size?: 'small' | 'medium' | 'large';
  @Input()
  color?:
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';
  constructor() {}

  ngOnInit() {}
}
