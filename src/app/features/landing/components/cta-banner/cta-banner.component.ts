import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../core/services/content.service';
import { ModalService } from '../../../../core/services/modal.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="cta-section">
      <div class="container cta-container">
        <h2 class="cta-heading heading-cta">
          {{ contentService.ctaSectionData().title }}
        </h2>
        <p class="cta-subtitle">
          {{ contentService.ctaSectionData().subtitle }}
        </p>
        <div class="cta-button-wrap">
          <app-button
            variant="primary"
            size="lg"
            (btnClick)="openContactModal()"
          >
            {{ contentService.ctaSectionData().buttonText }}
          </app-button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  protected readonly contentService = inject(ContentService);
  protected readonly modalService = inject(ModalService);

  protected openContactModal(): void {
    this.modalService.openModal('Initial Consultation');
  }
}
