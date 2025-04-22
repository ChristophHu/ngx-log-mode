import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'log-mode',
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './log-mode.component.html',
  styleUrl: './log-mode.component.sass'
})
export class LogModeComponent {
  constructor(private _logService: LogService) {}

  toggleLog() {
    this._logService.toggleLogActivate()
  }
  isLogActivated(): Observable<boolean> {
    return this._logService.isActivated$
  }
}
