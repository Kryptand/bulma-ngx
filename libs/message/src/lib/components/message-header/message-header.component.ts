import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bulma-ngx-message-header',
  templateUrl: './message-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'message-header' }
})
export class MessageHeaderComponent implements OnInit {
  @Input() isDeletable?: boolean;
  constructor() {}

  ngOnInit() {}
}
