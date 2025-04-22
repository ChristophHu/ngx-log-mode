import { Injectable } from '@angular/core';
import { LogLevel } from '../models/log-level.enum';
import { LogPublisherService } from './log-publisher.service';
import { LogPublisher } from '../models/log-publisher';
import { LogEntry } from '../models/log-entry';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  static logLevel: LogLevel = LogLevel.All
  static logWithDate: boolean = true
  static logPublisher: LogPublisher[]
  static isLogActivated: boolean = false

  constructor(private _logPublisherService: LogPublisherService) {
    LogService.logPublisher = this._logPublisherService.logPublishers
  }

  static log(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Info, component, optionalParams)
  }
  static debug(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Debug, component, optionalParams)
  }
  static info(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Info, component, optionalParams)
  }
  static warn(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Warn, component, optionalParams)
  }
  static error(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Error, component, optionalParams)
  }
  static fatal(component: string, ...optionalParams: any[]) {
    this.logger(LogLevel.Fatal, component, optionalParams)
  }

  static logger(level: LogLevel, component: string, params: any[]): void {
    if (level >= LogLevel.Off || !LogService.isLogActivated) return
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry()
      entry.component = component
      entry.level = level
      entry.logWithDate = LogService.logWithDate
      entry.params = params
      
      if (LogService.logPublisher) {
        for (let publisher of LogService.logPublisher) {
          publisher.log(entry).subscribe({
            next: (response: boolean) => {
              if (!response) {
                console.log('Check your publisher.')
              }
            },
            error: (error: any) => {
              console.log(error)
            }
          })
        }
      }
    }
  }

  static shouldLog(level: LogLevel): boolean {
    let response: boolean = false
    if ((level >= LogService.logLevel && level !== LogLevel.Off) || LogService.logLevel === LogLevel.All) {
      response = true
    }
    return response
  }

  public isLogActivated(): boolean {
    return LogService.isLogActivated
  }

  public toggleLogActivate() {
    LogService.isLogActivated = !LogService.isLogActivated
  }
}
