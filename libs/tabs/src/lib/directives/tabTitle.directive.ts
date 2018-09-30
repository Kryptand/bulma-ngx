import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaTabTitle]'
})
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
