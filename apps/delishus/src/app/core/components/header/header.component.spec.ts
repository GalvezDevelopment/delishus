import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './header.component';
import { DelishusUiModule } from '@galvezdev/ui';
import { CommonModule } from '@angular/common';
import { DelishusBreakpoint, DelishusStore } from '@galvezdev/shared';
import { TestScheduler, RunHelpers } from 'rxjs/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, DelishusUiModule, CommonModule],
      providers: [
        provideMockStore<DelishusStore>({
          initialState: { breakpoint: DelishusBreakpoint.SMALL },
        }),
      ],
    });
    testScheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have a title', () => {
    const title = fixture.debugElement.query(By.css('.header__title'));
    expect(title).toBeDefined();
    expect(title.nativeElement.innerHTML).toBe('Delishus');
  });

  it('should have breakpoint observables defined', () => {
    expect(component.isUntilSmall$).toBeDefined();
    expect(component.isAboveSmallBreakpoint$).toBeDefined();
  });

  it('should have be in small device screen', () => {
    testScheduler.run(({ expectObservable }) => {
      expectObservable(component.isUntilSmall$).toBe('a', { a: true });
      expectObservable(component.isAboveSmallBreakpoint$).toBe('a', {
        a: false,
      });
    });
  });
});
