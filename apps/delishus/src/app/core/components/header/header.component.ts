import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  DelishusStore,
  selectIsAboveSmallBreakpoint,
  selectIsUntilSmallBreakpoint,
} from '@galvezdev/shared';
import { DelishusUiModule } from '@galvezdev/ui';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DelishusUiModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _store: Store<DelishusStore> = inject(Store);
  isUntilSmall$: Observable<boolean> = this._store.select(
    selectIsUntilSmallBreakpoint
  );
  isAboveSmallBreakpoint$: Observable<boolean> = this._store.select(
    selectIsAboveSmallBreakpoint
  );
}
