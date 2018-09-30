import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BreadcrumbModule } from '@bulma-ngx/breadcrumb';
import { APP_MODULE_ROUTES } from './app.module.routing';
import { LoaderModule } from '@bulma-ngx/loader';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NotificationModule } from '@bulma-ngx/notification';
import { TabsModule } from '@bulma-ngx/tabs';
import { NavigationModule } from '@bulma-ngx/navigation';
import { PanelModule } from '@bulma-ngx/panel';
import { CardsModule } from '@bulma-ngx/cards';
import { ModalModule } from '@bulma-ngx/modal';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BreadcrumbModule.forRoot(),
    CardsModule,
    ModalModule,
    NxModule.forRoot(),
    HttpClientModule,
    TabsModule,
    PanelModule,
    NavigationModule.forRoot(),
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
