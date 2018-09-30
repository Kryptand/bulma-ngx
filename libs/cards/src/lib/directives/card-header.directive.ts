import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaCardHeader]'
})
export class CardHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
