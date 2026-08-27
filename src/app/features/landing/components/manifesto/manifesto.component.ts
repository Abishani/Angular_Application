import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="manifesto-section">
      <div class="container manifesto-container">
        <!-- Left Headline -->
        <div class="manifesto-heading-col">
          <h2 class="manifesto-heading heading-section">
            <span class="navy-line">{{ contentService.manifestoData().leadText }}</span><br />
            <span class="text-gradient">{{ contentService.manifestoData().gradientTextPart1 }}</span><br />
            <span class="text-gradient">{{ contentService.manifestoData().gradientTextPart2 }}</span>
          </h2>
        </div>

        <!-- Right Value Prop Body -->
        <div class="manifesto-body-col">
          <p class="manifesto-description">
            {{ contentService.manifestoData().bodyText }}
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './manifesto.component.scss',
})
export class ManifestoComponent {
  protected readonly contentService = inject(ContentService);
}
