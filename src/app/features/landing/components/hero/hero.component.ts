import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../core/services/content.service';
import { ModalService } from '../../../../core/services/modal.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section id="hero" class="hero-section">
      <!-- Background Container with Overlay Effect -->
      <div class="hero-bg" aria-hidden="true">
        <img
          [src]="bgImg()"
          alt="People ascending escalator with motion blur"
          class="bgImg"
          loading="eager"
          fetchpriority="high"
        />
        <div class="hero-color-overlay"></div>
        <div class="hero-multiply-overlay"></div>
        <div class="hero-fade-overlay"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-heading heading-hero">
            <span>{{ contentService.heroData().titlePart1 }}</span><br />
            <span>{{ contentService.heroData().titlePart2 }}</span>
            <span class="text-gradient">{{ contentService.heroData().highlightPart1 }}</span><br />
            <span class="text-gradient">{{ contentService.heroData().highlightPart2 }}</span>
          </h1>

          <p class="hero-description">
            {{ contentService.heroData().description }}
          </p>

          <div class="hero-actions">
            <app-button
              variant="primary"
              size="lg"
              (btnClick)="openContactModal()"
            >
              {{ contentService.heroData().ctaLabel }}
            </app-button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly contentService = inject(ContentService);
  protected readonly modalService = inject(ModalService);

  // Expose background image signal as bgImg
  protected readonly bgImg = computed(() => this.contentService.heroData().backgroundImage);

  protected openContactModal(): void {
    this.modalService.openModal('Executive AI Consultation');
  }
}
