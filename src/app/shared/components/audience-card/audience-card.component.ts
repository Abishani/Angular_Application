import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudienceCard } from '../../../core/models/content.model';

@Component({
  selector: 'app-audience-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="audience-card" (click)="onActionClick($event)">
      <div class="card-image-wrapper">
        <img
          [src]="card().imageSrc"
          [alt]="card().altText"
          class="card-image"
          loading="eager"
        />
        <div class="card-overlay"></div>
      </div>

      <div class="card-content">
        <h3 class="card-title">{{ card().title }}</h3>
        <p class="card-description">{{ card().description }}</p>
        <button
          type="button"
          class="card-action-link"
          (click)="onActionClick($event)"
          [attr.aria-label]="card().actionLabel"
        >
          {{ card().actionLabel }}
        </button>
      </div>
    </article>
  `,
  styleUrl: './audience-card.component.scss',
})
export class AudienceCardComponent {
  readonly card = input.required<AudienceCard>();
  readonly actionClick = output<AudienceCard>();

  protected onActionClick(event: Event): void {
    event.stopPropagation();
    this.actionClick.emit(this.card());
  }
}
