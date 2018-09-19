import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BreadcrumbViewModel } from '../models/breadcrumb.view-model';
@Injectable()
export class BreadcrumbService {
  currBreadcrumb$ = new Subject<BreadcrumbViewModel>();

  constructor(private router: Router) {}

  addItem(label: string, href: string = this.router.url): void {
    const breadcrumbItem: BreadcrumbViewModel = { label: label, url: href };
    this.currBreadcrumb$.next(breadcrumbItem);
  }
}
