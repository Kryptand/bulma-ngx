import { async, TestBed } from '@angular/core/testing';
import { BreadcrumbModule } from './breadcrumb.module';

describe('BreadcrumbModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BreadcrumbModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(BreadcrumbModule).toBeDefined();
  });
});
