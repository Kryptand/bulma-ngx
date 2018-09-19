import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bulma-ngx-message-container',
  templateUrl: './message-container.component.html'
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
