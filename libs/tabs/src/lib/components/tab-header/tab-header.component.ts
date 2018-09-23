import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
  selector: 'bulma-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
} )
export class TabHeaderComponent implements OnInit {
  @Input() label: string;
  @Input() isActive = false;

  @Output()
  activeStateChanged: EventEmitter<string> = new EventEmitter<string>();
  tabId: string;

  constructor() {
  }

  ngOnInit() {
  }
}
