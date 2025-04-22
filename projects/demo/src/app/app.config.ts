import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TemplateComponent } from './template/template.component';
import { provideHttpClient } from '@angular/common/http';
import { provideGithubPagesDemo } from '@christophhu/ngx-github-pages-demo';
import { provideLogger } from '../../../ngx-log-mode/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-log-mode', version: '19.2.0', token: null, template: TemplateComponent }),
    // WebAPI
    // provideLogger({ default_logger: 'webapi', default_location: 'https://localhost:7246/insert', isActive: true }),
    provideLogger({ default_logger: 'console', default_location: '', isActive: true }),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
