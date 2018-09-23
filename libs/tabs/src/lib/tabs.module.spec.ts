import { async, TestBed } from '@angular/core/testing';
import { TabsModule } from './tabs.module';

describe('TabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TabsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TabsModule).toBeDefined();
  });
});
