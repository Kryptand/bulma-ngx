import { async, TestBed } from '@angular/core/testing';
import { CardsModule } from './cards.module';

describe('CardsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CardsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(CardsModule).toBeDefined();
  });
});
