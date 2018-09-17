import { Component, Input } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb';
import { Router, ActivationEnd } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'bulma-breadcrumb-container',
  templateUrl: './breadcrumb-container.component.html'
})
export class BreadcrumbContainerComponent {
  @Input() seperator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  @Input() size?: 'small' | 'medium' | 'large';

  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private breadcrumbProvider: BreadcrumbService
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd) {
        if (e.snapshot.data.breadcrumbs) {
          this.breadcrumbs = Object.assign([], e.snapshot.data.breadcrumbs);
        } else {
          if (
            this.breadcrumbs.length <= 0 &&
            e.snapshot.data.defaultBreadcrumbs
          ) {
            this.breadcrumbs = Object.assign(
              [],
              e.snapshot.data.defaultBreadcrumbs
            );
          }
        }
      }
    });

    this.breadcrumbProvider.currBreadcrumb$.subscribe(breadcrumb =>
      this.breadcrumbs.push(breadcrumb)
    );
  }
}
