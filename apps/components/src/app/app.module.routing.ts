import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbViewModel } from '@bulma-ngx/breadcrumb';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    // path: 'cards',
    // // component: CardsComponent,
    // // data: {
    // //   breadcrumbs: [new BreadcrumbViewModel('Cards', '/cards')]
    // // }
  }
];
export const APP_MODULE_ROUTES = RouterModule.forRoot([
  { path: '', component: AppComponent }
]);
