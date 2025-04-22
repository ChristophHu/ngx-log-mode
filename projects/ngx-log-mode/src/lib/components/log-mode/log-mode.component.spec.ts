import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogModeComponent } from './log-mode.component';

describe('LogModeComponent', () => {
  let component: LogModeComponent;
  let fixture: ComponentFixture<LogModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
