import { async, TestBed } from '@angular/core/testing';
import { MessageModule } from './message.module';

describe('MessageModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MessageModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MessageModule).toBeDefined();
  });
});
