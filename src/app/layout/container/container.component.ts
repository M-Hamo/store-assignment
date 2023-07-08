import { Breakpoints } from '@angular/cdk/layout';
import { Component, DestroyRef, OnInit, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SideToggleService } from '@shared/services/side-toggle.service';
import { tap } from 'rxjs/operators';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class LayoutContainerComponent implements OnInit {
  public constructor(
    private readonly _sideToggleService: SideToggleService,
    private readonly _breakpointObserver: BreakpointObserverService,
    private readonly _destroyRef: DestroyRef
  ) {}

  public readonly sideToggled: Signal<boolean> =
    this._sideToggleService.sideToggled;

  public readonly Breakpoints = Breakpoints;

  public isSmallScreen: boolean = false;

  public ngOnInit(): void {
    this._breakpointObserver.currentBreakpoint$
      .pipe(
        tap((val: string) => {
          if (val === Breakpoints.Small || val === Breakpoints.XSmall)
            this.isSmallScreen = true;
          else this.isSmallScreen = false;
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
