import { DelishusBreakpoint, DelishusStore } from '@galvezdev/shared';
import { createSelector } from '@ngrx/store';

const feature = (state: DelishusStore) => state.breakpoint;
export const selectBreakpoint = createSelector(
  feature,
  (breakpoint) => breakpoint
);

export const selectIsXSmallBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.X_SMALL);

export const selectIsSmallBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.SMALL);

export const selectIsMediumBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.MEDIUM);

export const selectIsDesktopBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.DESKTOP);

export const selectIsXLargeBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.LARGE_DESKTOP);

export const selectIsXXLargeBreakpoint = createSelector<
  DelishusStore,
  string,
  boolean
>(feature, (breakpoint) => breakpoint === DelishusBreakpoint.XX_LARGE_DESKTOP);

// UNTILS

export const selectIsUntilSmallBreakpoint = createSelector<
  DelishusStore,
  boolean,
  boolean,
  boolean
>(
  selectIsXSmallBreakpoint,
  selectIsSmallBreakpoint,
  (isXs, isSm) => isXs || isSm
);

export const selectIsUntilMediumBreakpoint = createSelector<
  DelishusStore,
  boolean,
  boolean,
  boolean
>(
  selectIsUntilSmallBreakpoint,
  selectIsMediumBreakpoint,
  (untilSmall, isMedium) => untilSmall || isMedium
);

export const selectIsUntilDesktopBreakpoint = createSelector<
  DelishusStore,
  boolean,
  boolean,
  boolean
>(
  selectIsUntilMediumBreakpoint,
  selectIsDesktopBreakpoint,
  (untilMedium, isDesktop) => untilMedium || isDesktop
);

// ABOVES

export const selectIsAboveSmallBreakpoint = createSelector<
  DelishusStore,
  boolean,
  boolean
>(selectIsUntilSmallBreakpoint, (untilSmall) => !untilSmall);

export const selectIsAboveMediumBreakpoint = createSelector<
  DelishusStore,
  boolean,
  boolean,
  boolean
>(
  selectIsAboveSmallBreakpoint,
  selectIsMediumBreakpoint,
  (aboveSmall, isMedium) => aboveSmall && !isMedium
);
