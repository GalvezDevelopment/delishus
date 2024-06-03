import { createAction, props } from '@ngrx/store';

export const setBreakpoint = createAction(
  '[Breakpoint] Set',
  props<{ breakpoint: string }>()
);
