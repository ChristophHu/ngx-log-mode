import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LogDecorator, LogModeComponent, LogService } from '../../../../ngx-log-mode/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    LogModeComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass',
  providers: [
    LogService
  ]
})
export class TemplateComponent {
  private _logService: LogService

  constructor(@Inject(LogService) _logService: LogService) {
    this._logService = _logService
  }

  toggleLog() {
    this._logService.toggleLogActivate()
  }
  isLogActivated(): boolean {
    LogService.log('TemplateComponent', 'LogIsActivated', this._logService.isLogActivated())
    return this._logService.isLogActivated()
  }

  // @LogDecorator({ logType: 'info', input: true, output: true, timestamp: true })
  logThis(param: string): void {
    LogService.log('TemplateComponent', 'logThis()', ' param: ' + param)
  }

  logInfo() {
    LogService.info('TemplateComponent', 'logInfo()')
  }
  logDebug() {
    LogService.debug('TemplateComponent', 'logDebug()')
  }
  logWarn() {
    LogService.warn('TemplateComponent', 'logWarn()')
  }
  logError() {
    LogService.error('TemplateComponent', 'logError()')
  }
  logFatal() {
    LogService.fatal('TemplateComponent', 'logFatal()')
  }
}
