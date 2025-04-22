import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Observable, take } from 'rxjs';
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

  // needed for custom toggle button
  // form: FormGroup

  constructor(@Inject(LogService) _logService: LogService) {
    this._logService = _logService

    // this.form = this._fb.group({
    //   darkMode: [true]
    // })
  }

  @LogDecorator({ logType: 'info', input: false, output: false, timestamp: true })
  toggleLog() {
    this._logService.toggleLogActivate()
  }
  isLogActivated(): Observable<boolean> {
    LogService.log('TemplateComponent', 'LogIsActivated', this._logService.isActivated$.pipe(take(1)).subscribe())
    return this._logService.isActivated$
  }

  logThis(param: string): void {
    LogService.log('TemplateComponent', 'logThis()', ' param: ' + param)
  }

  // isChecked : boolean = true
}
