import { async, TestBed } from '@angular/core/testing';
import { PanelModule } from './panel.module';

describe('PanelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PanelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PanelModule).toBeDefined();
  });
});
