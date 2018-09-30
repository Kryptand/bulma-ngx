import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaCardImage]'
})
export class CardImageDirective {
  constructor(public templateRef: TemplateRef<any>) {}

  calculateDimensions() {}
}
