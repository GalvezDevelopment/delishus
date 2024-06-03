import { createReducer, on } from '@ngrx/store';
import { setBreakpoint } from './breakpoint.actions';

export const initialState = '';

export const breakpointReducer = createReducer(
  initialState,
  on(setBreakpoint, (state, { breakpoint }) => breakpoint)
);
