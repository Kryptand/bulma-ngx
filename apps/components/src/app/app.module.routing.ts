import { Routes, RouterModule } from '@angular/router';
import { Breadcrumb } from '@bulma-ngx/breadcrumb';
import { CardsComponent } from './cards/cards.component';

const ROUTES: Routes = [
  {
    path: 'cards',
    component: CardsComponent,
    data: {
      breadcrumbs: [new Breadcrumb('Cards', '/cards')]
    }
  }
];
export const APP_MODULE_ROUTES = RouterModule.forRoot(ROUTES);
