import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guid } from '@bulma-ngx/utility';

@Component({
  selector: 'bulma-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() label: string;
  @Input() isActive = false;

  @Output()
  activeStateChanged: EventEmitter<string> = new EventEmitter<string>();
  tabId: string = new Guid().toString();

  constructor() {}

  ngOnInit() {}
}
