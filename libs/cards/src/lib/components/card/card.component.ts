import {
  ContentChild,
  AfterContentChecked,
  Component,
  OnInit
} from '@angular/core';
import { CardContentDirective } from '../../directives/card-content.directive';
import { CardFooterDirective } from '../../directives/card-footer.directive';
import { CardHeaderDirective } from '../../directives/card-header.directive';
import { CardImageDirective } from '../../directives/card-image.directive';

@Component({
  selector: 'bulma-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterContentChecked {
  @ContentChild(CardContentDirective) content: CardContentDirective | null;
  @ContentChild(CardFooterDirective) footer: CardFooterDirective | null;
  @ContentChild(CardHeaderDirective) header: CardHeaderDirective | null;
  @ContentChild(CardImageDirective) image: CardImageDirective | null;
  constructor() {}

  ngOnInit() {}
  ngAfterContentChecked() {
    console.debug(this.content);
    console.debug(this.footer);
    console.debug(this.header);
  }
}
