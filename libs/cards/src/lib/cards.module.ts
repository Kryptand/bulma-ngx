import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentDirective } from './directives/card-content.directive';
import { CardFooterDirective } from './directives/card-footer.directive';
import { CardHeaderDirective } from './directives/card-header.directive';
import { CardImageDirective } from './directives/card-image.directive';
import { CardComponent } from './components/card/card.component';

const CARD_COMPONENTS = [
  CardComponent,
  CardContentDirective,
  CardFooterDirective,
  CardHeaderDirective,
  CardImageDirective
];
@NgModule({
  imports: [CommonModule],
  declarations: [CARD_COMPONENTS],
  exports: [CARD_COMPONENTS]
})
export class CardsModule {}
