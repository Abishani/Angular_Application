import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../core/services/content.service';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <!-- Dark Primary Footer Bar -->
      <div class="footer-primary-bar">
        <div class="container footer-primary-container">
          <!-- Brand Logo -->
          <div class="footer-brand">
            <div class="logo-mark" aria-hidden="true">
              <svg width="32" height="26" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24V11.5C6 7.35786 9.35786 4 13.5 4V4C17.6421 4 21 7.35786 21 11.5V24" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <path d="M19 24V16C19 13.7909 20.7909 12 23 12V12C25.2091 12 27 13.7909 27 16V24" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="logo-text">
              <span class="logo-title">Aintegrator</span>
              <span class="logo-subtitle">Education</span>
            </div>
          </div>

          <!-- Divider -->
          <div class="footer-divider" aria-hidden="true"></div>

          <!-- Location Badge -->
          <div class="footer-location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-icon">
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M12 2C7.58172 2 4 5.58172 4 10C4 15.25 12 22 12 22C12 22 20 15.25 20 10C20 5.58172 16.4183 2 12 2Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>{{ contentService.footerData().location }}</span>
          </div>

          <!-- Website Domain Link -->
          <div class="footer-web-link">
            <a
              [href]="contentService.footerData().websiteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="domain-link"
            >
              {{ contentService.footerData().websiteDisplay }}
            </a>
          </div>

          <!-- Legal Notice -->
          <div class="footer-legal">
            <a
              href="#legal"
              (click)="onLegalClick($event)"
              class="legal-link"
            >
              <span>{{ contentService.footerData().legalNoticeLabel }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="external-icon">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom White Sub-footer Bar -->
      <div class="footer-secondary-bar">
        <div class="container footer-secondary-container">
          <!-- Copyright -->
          <div class="copyright-text">
            {{ contentService.footerData().copyright }}
          </div>

          <!-- Social Links -->
          <div class="social-links-group" aria-label="Social media channels">
            @for (social of contentService.socialLinks(); track social.id) {
              <a
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn"
                [attr.aria-label]="social.name"
              >
                @switch (social.icon) {
                  @case ('x') {
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  }
                  @case ('instagram') {
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  }
                  @case ('pinterest') {
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  }
                  @case ('linkedin') {
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  }
                  @case ('tiktok') {
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.32-1.41 3.48-3.22.06-1.85.03-3.7.04-5.55v-13.18z"/>
                    </svg>
                  }
                  @case ('youtube') {
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  }
                }
              </a>
            }
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly contentService = inject(ContentService);
  protected readonly modalService = inject(ModalService);

  protected onLegalClick(event: MouseEvent): void {
    event.preventDefault();
    this.modalService.openModal('Legal Notice & Compliance');
  }
}
