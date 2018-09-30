import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaCardContent]'
})
export class CardContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
