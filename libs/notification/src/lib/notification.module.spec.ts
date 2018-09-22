import { async, TestBed } from '@angular/core/testing';
import { NotificationModule } from './notification.module';

describe('NotificationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotificationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NotificationModule).toBeDefined();
  });
});
