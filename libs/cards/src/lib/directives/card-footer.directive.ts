import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaCardFooter]'
})
export class CardFooterDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
