import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideUI } from 'tailwind-ng';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideUI(),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
