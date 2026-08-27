import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { ModalService } from '../../core/services/modal.service';
import { AudienceCard } from '../../core/models/content.model';

import { HeroComponent } from './components/hero/hero.component';
import { TrustBannerComponent } from '../../shared/components/trust-banner/trust-banner.component';
import { AudienceCardComponent } from '../../shared/components/audience-card/audience-card.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustBannerComponent,
    AudienceCardComponent,
    ManifestoComponent,
    TestimonialCardComponent,
    CtaBannerComponent,
  ],
  template: `
    <main class="landing-main">
      <!-- 1. Hero Section -->
      <app-hero />

      <!-- 2. Trust / Partners Banner -->
      <section class="trust-section">
        <div class="container">
          <app-trust-banner />
        </div>
      </section>

      <!-- 3. Audience Program Cards (Institutions, Executives, Companies) -->
      <section id="institutions" class="audience-section">
        <div class="container">
          <div class="audience-cards-grid">
            @for (card of contentService.audienceCards(); track card.id) {
              <app-audience-card
                [card]="card"
                (actionClick)="handleCardAction($event)"
              />
            }
          </div>
        </div>
      </section>

      <!-- 4. Manifesto / Value Proposition -->
      <section id="executives">
        <app-manifesto />
      </section>

      <!-- 5. Testimonials Section -->
      <section id="companies" class="testimonials-section">
        <div class="container">
          <div class="testimonials-grid">
            @for (testimonial of contentService.testimonials(); track testimonial.id) {
              <app-testimonial-card [testimonial]="testimonial" />
            }
          </div>
        </div>
      </section>

      <!-- 6. Bottom CTA Section -->
      <section id="help">
        <app-cta-banner />
      </section>
    </main>
  `,
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  protected readonly contentService = inject(ContentService);
  protected readonly modalService = inject(ModalService);

  protected handleCardAction(card: AudienceCard): void {
    this.modalService.openModal(card.title);
  }
}
