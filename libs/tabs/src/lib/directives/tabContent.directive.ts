import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[bulmaTabContent]'
})
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
