import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NotificationService,
  NotificationViewModel,
  NotifierConfig
} from '@bulma-ngx/notification';
import { NavigationService } from '@bulma-ngx/navigation';
import { MenuItemAggregateViewModel } from 'libs/navigation/src/lib/models/menu-item-aggregate.view-model';
import { NavBarViewModel } from 'libs/navigation/src/lib/models/navbar.view-model';
@Component({
  selector: 'bulma-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulma-ngx';
  modalActive = false;
  constructor(
  ) {
 
  }
}
