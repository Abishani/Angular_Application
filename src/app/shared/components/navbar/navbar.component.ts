import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../core/services/content.service';
import { ModalService } from '../../../core/services/modal.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <header class="site-header" [class.is-scrolled]="isScrolled()">
      <div class="container header-container">
        <!-- Logo -->
        <a href="#hero" class="brand-logo" aria-label="Aintegrator Education Home">
          <div class="logo-mark">
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 24V11.5C6 7.35786 9.35786 4 13.5 4V4C17.6421 4 21 7.35786 21 11.5V24" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>
              <path d="M19 24V16C19 13.7909 20.7909 12 23 12V12C25.2091 12 27 13.7909 27 16V24" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-title">Aintegrator</span>
            <span class="logo-subtitle">Education</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            @for (item of contentService.navItems(); track item.id) {
              <li class="nav-item">
                <a [href]="item.href" class="nav-link" (click)="onNavClick($event, item.href)">
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
        </nav>

        <!-- Right Action Button -->
        <div class="header-actions">
          <div class="header-cta-btn">
            <app-button
              variant="primary"
              size="sm"
              (btnClick)="openContactModal()"
            >
              Contact
            </app-button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            class="mobile-menu-toggle"
            [class.is-active]="mobileMenuOpen()"
            (click)="toggleMobileMenu()"
            aria-label="Toggle navigation menu"
            [attr.aria-expanded]="mobileMenuOpen()"
          >
            <span class="hamburger-line line-1"></span>
            <span class="hamburger-line line-2"></span>
            <span class="hamburger-line line-3"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <div class="mobile-drawer-backdrop" (click)="toggleMobileMenu()">
          <div class="mobile-drawer" (click)="$event.stopPropagation()">
            <nav class="mobile-nav" aria-label="Mobile Navigation">
              <ul class="mobile-nav-list">
                @for (item of contentService.navItems(); track item.id) {
                  <li class="mobile-nav-item">
                    <a [href]="item.href" class="mobile-nav-link" (click)="onMobileNavClick($event, item.href)">
                      {{ item.label }}
                    </a>
                  </li>
                }
              </ul>
            </nav>
            <div class="mobile-drawer-cta">
              <app-button
                variant="primary"
                size="md"
                [fullWidth]="true"
                (btnClick)="openContactFromMobile()"
              >
                Contact
              </app-button>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly contentService = inject(ContentService);
  protected readonly modalService = inject(ModalService);

  readonly isScrolled = signal<boolean>(false);
  readonly mobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 15);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected onNavClick(event: MouseEvent, href: string): void {
    if (href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  protected onMobileNavClick(event: MouseEvent, href: string): void {
    this.mobileMenuOpen.set(false);
    this.onNavClick(event, href);
  }

  protected openContactModal(): void {
    this.modalService.openModal('General Inquiry');
  }

  protected openContactFromMobile(): void {
    this.mobileMenuOpen.set(false);
    this.modalService.openModal('General Inquiry');
  }
}
