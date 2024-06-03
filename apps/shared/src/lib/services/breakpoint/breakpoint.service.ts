import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { setBreakpoint } from './breakpoint.actions';
import { DelishusStore } from '../../interfaces/store.interface';

export class DelishusBreakpoint {
  static X_SMALL = '(max-width: 575px)';
  static SMALL = '(min-width: 576px) and (max-width: 767px)';
  static MEDIUM = '(min-width: 768px) and (max-width: 991px)';
  static DESKTOP = '(min-width: 992px) and (max-width: 1999px)';
  static LARGE_DESKTOP = '(min-width: 1200px) and (max-width: 1399px)';
  static XX_LARGE_DESKTOP = '(min-width: 1400px)';
}

export const DelishusBreakpointMap = new Map([
  [DelishusBreakpoint.X_SMALL, 'X_SMALL'],
  [DelishusBreakpoint.SMALL, 'SMALL'],
  [DelishusBreakpoint.MEDIUM, 'MEDIUM'],
  [DelishusBreakpoint.DESKTOP, 'DESKTOP'],
  [DelishusBreakpoint.LARGE_DESKTOP, 'LARGE_DESKTOP'],
  [DelishusBreakpoint.XX_LARGE_DESKTOP, 'XX_LARGE_DESKTOP'],
]);

@Injectable({
  providedIn: 'root',
})
export class CustomBreakpointService {
  private _breakpoint$: BreakpointObserver = inject(BreakpointObserver);
  private _store: Store<DelishusStore> = inject(Store);

  constructor() {
    this._breakpoint$
      .observe([
        DelishusBreakpoint.X_SMALL, // XSmall
        DelishusBreakpoint.SMALL, // Small
        DelishusBreakpoint.MEDIUM, // Medium
        DelishusBreakpoint.DESKTOP, // Desktop
        DelishusBreakpoint.LARGE_DESKTOP, // Large Desktop
        DelishusBreakpoint.XX_LARGE_DESKTOP, // XX-Large Desktop
      ])
      .pipe(map((data) => this.getMatchedOne(data.breakpoints)))
      .subscribe((breakpoint) =>
        this._store.dispatch(setBreakpoint({ breakpoint }))
      );
  }

  init(): () => Promise<boolean> {
    return () => Promise.resolve(true);
  }

  private getMatchedOne(breakpoints: any): string {
    return Object.entries(breakpoints)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)[0];
  }
}
