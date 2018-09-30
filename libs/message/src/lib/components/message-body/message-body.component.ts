import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bulma-ngx-message-body',
  templateUrl: './message-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'message-body' }
})
export class MessageBodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
