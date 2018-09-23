import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BreadcrumbModule } from '@bulma-ngx/breadcrumb';
import { CardsComponent } from './cards/cards.component';
import { APP_MODULE_ROUTES } from './app.module.routing';
import { LoaderModule } from '@bulma-ngx/loader';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NotificationModule } from '@bulma-ngx/notification';
import { TabsModule } from '@bulma-ngx/tabs';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [
    BrowserModule,
    BreadcrumbModule.forRoot(),
    NxModule.forRoot(),
    HttpClientModule,
    TabsModule,
    LoaderModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    NotificationModule.forRoot(),
    APP_MODULE_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
