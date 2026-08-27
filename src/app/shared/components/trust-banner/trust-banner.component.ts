import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-trust-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="trust-banner">
      <div class="trust-label">
        Already Teaching At
      </div>

      <div class="partners-group">
        <!-- Partner 1: CEFCO -->
        <div class="partner-item partner-cefco">
          <div class="logo-graphic cefco-graphic" aria-label="CEFCO">
            <span class="cefco-bar left-bar"></span>
            <span class="cefco-text">cefco</span>
            <span class="cefco-bar right-bar"></span>
          </div>
          <div class="partner-sub">CENTRE ROMAND EN FORMATION CONTINUE</div>
          <div class="partner-location">(Lausanne, French-speaking Switzerland)</div>
        </div>

        <!-- Partner 2: SAWI -->
        <div class="partner-item partner-sawi">
          <div class="logo-graphic sawi-graphic" aria-label="SAWI">
            <span class="sawi-sa">sa</span>
            <span class="sawi-w-wrapper">
              <span class="sawi-w">w</span>
              <span class="sawi-slash"></span>
            </span>
            <span class="sawi-i">i</span>
          </div>
          <div class="partner-location">(Zurich, German-language programs)</div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './trust-banner.component.scss',
})
export class TrustBannerComponent {
  protected readonly contentService = inject(ContentService);
}
