import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bulma-ngx-message-header',
  templateUrl: './message-header.component.html',
  host: { class: 'message-header' }
})
export class MessageHeaderComponent implements OnInit {
  @Input() isDeletable?: boolean;
  constructor() {}

  ngOnInit() {}
}
