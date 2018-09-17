import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BreadcrumbModule } from '@bulma-ngx/breadcrumb';
import { CardsComponent } from './cards/cards.component';
import { APP_MODULE_ROUTES } from './app.module.routing';
import { LoaderModule } from '@bulma-ngx/loader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [
    BrowserModule,
    BreadcrumbModule.forRoot(),
    NxModule.forRoot(),
    HttpClientModule,
    LoaderModule.forRoot(),
    APP_MODULE_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
