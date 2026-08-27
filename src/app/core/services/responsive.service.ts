import { Injectable, signal, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService implements OnDestroy {
  readonly isMobile = signal<boolean>(false);
  readonly isTablet = signal<boolean>(false);
  readonly isDesktop = signal<boolean>(true);

  private mobileQueryListener?: () => void;
  private tabletQueryListener?: () => void;
  private desktopQueryListener?: () => void;

  private mobileMediaQuery?: MediaQueryList;
  private tabletMediaQuery?: MediaQueryList;
  private desktopMediaQuery?: MediaQueryList;

  constructor() {
    if (typeof window !== 'undefined') {
      this.mobileMediaQuery = window.matchMedia('(max-width: 639px)');
      this.tabletMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
      this.desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

      this.updateMatches();

      this.mobileQueryListener = () => this.updateMatches();
      this.tabletQueryListener = () => this.updateMatches();
      this.desktopQueryListener = () => this.updateMatches();

      this.mobileMediaQuery.addEventListener('change', this.mobileQueryListener);
      this.tabletMediaQuery.addEventListener('change', this.tabletQueryListener);
      this.desktopMediaQuery.addEventListener('change', this.desktopQueryListener);
    }
  }

  private updateMatches(): void {
    if (this.mobileMediaQuery && this.tabletMediaQuery && this.desktopMediaQuery) {
      this.isMobile.set(this.mobileMediaQuery.matches);
      this.isTablet.set(this.tabletMediaQuery.matches);
      this.isDesktop.set(this.desktopMediaQuery.matches);
    }
  }

  ngOnDestroy(): void {
    if (this.mobileMediaQuery && this.mobileQueryListener) {
      this.mobileMediaQuery.removeEventListener('change', this.mobileQueryListener);
    }
    if (this.tabletMediaQuery && this.tabletQueryListener) {
      this.tabletMediaQuery.removeEventListener('change', this.tabletQueryListener);
    }
    if (this.desktopMediaQuery && this.desktopQueryListener) {
      this.desktopMediaQuery.removeEventListener('change', this.desktopQueryListener);
    }
  }
}
