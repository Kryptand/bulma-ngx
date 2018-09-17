import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb';

@Component({
  selector: 'bulma-breadcrumb-item,[bulma-breadcrumb-item]',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css']
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() breadcrumb: Breadcrumb;
  constructor() {}

  ngOnInit() {
    console.log(this.breadcrumb);
  }
}
