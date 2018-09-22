import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NotificationService,
  NotificationViewModel,
  NotifierConfig
} from '@bulma-ngx/notification';

@Component({
  selector: 'bulma-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulma-ngx';

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    let createExampleData: (i: number, delay?) => void = (
      i: number,
      delay = 3000
    ) => {
      if (i % 2 === 0) {
        delay = 1500;
      }

      setTimeout(() => {
        const testviewModel = new NotificationViewModel();
        testviewModel.type = 'warning';
        testviewModel.content =
          ' <b>Primar</b> lorem ipsum dolor sit amet, consectetur\n' +
          '  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,\n' +
          '  consectetur adipiscing elit <script>alert("foschni");</script>' +
          i;

        this.notificationService.addNotification(testviewModel);
        if (--i) {
          createExampleData(i);
        }
      }, delay);
    };
    createExampleData(10);
  }
}
