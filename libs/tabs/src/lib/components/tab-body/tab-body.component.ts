import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'bulma-ngx-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
} )
export class TabBodyComponent implements OnInit {
  @Input() label: string;
  @Input() isActive = false;
  tabId: string;

  ngOnInit() {
  }
}
