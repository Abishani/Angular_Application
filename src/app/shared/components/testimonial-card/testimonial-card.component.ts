import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../../core/models/content.model';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial-card">
      <blockquote class="testimonial-quote">
        {{ testimonial().quote }}
      </blockquote>

      <div class="testimonial-author">
        <div class="author-avatar" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="currentColor"/>
            <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="author-meta">
          <cite class="author-role">{{ testimonial().authorRole }}</cite>
          <span class="author-org">{{ testimonial().organization }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<Testimonial>();
}
