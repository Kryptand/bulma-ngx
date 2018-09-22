import { async, TestBed } from '@angular/core/testing';
import { UtilityModule } from './utility.module';

describe('UtilityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UtilityModule).toBeDefined();
  });
});
