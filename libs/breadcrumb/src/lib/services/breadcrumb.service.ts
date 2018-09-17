import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb';
@Injectable()
export class BreadcrumbService {
  currBreadcrumb$ = new Subject<Breadcrumb>();

  constructor(private router: Router) {}

  addItem(label: string, href: string = this.router.url): void {
    const breadcrumbItem: Breadcrumb = { label: label, url: href };
    this.currBreadcrumb$.next(breadcrumbItem);
  }
}
