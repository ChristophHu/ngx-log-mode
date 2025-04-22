import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'log-mode',
  imports: [
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
  isLogActivated(): boolean {
    return this._logService.isLogActivated()
  }
}
