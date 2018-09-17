import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bulma-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulma-ngx';
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(val => console.debug(val));
  }
}
