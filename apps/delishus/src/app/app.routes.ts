import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'waiters',
    loadChildren: () => import('waiters/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'profile',
    loadChildren: () => import('profile/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'waiters',
    pathMatch: 'full',
  },
];
