import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CustomBreakpointService, breakpointReducer } from '@galvezdev/shared';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: APP_INITIALIZER,
      useFactory: function (breakpoint: CustomBreakpointService) {
        return breakpoint.init();
      },
      deps: [CustomBreakpointService],
      multi: true,
    },
    provideStore({ breakpoint: breakpointReducer }),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
      connectInZone: true,
    }),
  ],
};
