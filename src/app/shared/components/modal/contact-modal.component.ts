import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../core/services/modal.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    @if (modalService.isOpen()) {
      <div
        class="modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="modal-dialog" (click)="$event.stopPropagation()">
          <button
            type="button"
            class="modal-close-btn"
            (click)="modalService.closeModal()"
            aria-label="Close dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          @if (!modalService.isSubmitted()) {
            <header class="modal-header">
              <div class="header-badge">Confidential Inquiry</div>
              <h2 id="modal-title" class="modal-title">Initiate a Conversation</h2>
              <p class="modal-subtitle">
                Connect with our Swiss leadership advisory team. All discussions remain strictly confidential.
              </p>
            </header>

            <form class="modal-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="modal-name">Full Name</label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Marc Dubois"
                  [(ngModel)]="formData.name"
                  class="form-input"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="modal-email">Work Email</label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@organization.ch"
                    [(ngModel)]="formData.email"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <label for="modal-org">Organization</label>
                  <input
                    id="modal-org"
                    type="text"
                    name="organization"
                    placeholder="Institution / Company name"
                    [(ngModel)]="formData.organization"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="modal-program">Program Focus</label>
                <select
                  id="modal-program"
                  name="program"
                  [(ngModel)]="modalService.selectedProgram"
                  class="form-select"
                >
                  <option value="For Training Institutions">For Training Institutions</option>
                  <option value="For Executives">For Executives</option>
                  <option value="For Companies">For Companies</option>
                  <option value="General Advisory">General Advisory</option>
                </select>
              </div>

              <div class="form-group">
                <label for="modal-message">Brief Note / Context (Optional)</label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about your organization's AI objectives..."
                  [(ngModel)]="formData.message"
                  class="form-textarea"
                ></textarea>
              </div>

              <div class="form-actions">
                <app-button
                  type="submit"
                  variant="primary"
                  size="lg"
                  [fullWidth]="true"
                >
                  Request Confidential Consultation
                </app-button>
              </div>
            </form>
          } @else {
            <div class="submission-success">
              <div class="success-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="success-title">Thank You</h3>
              <p class="success-desc">
                Your request has been received under our Swiss discretion policy. A partner will reach out to you within 24 business hours.
              </p>
              <app-button
                variant="secondary"
                size="md"
                (btnClick)="modalService.closeModal()"
              >
                Close Window
              </app-button>
            </div>
          }
        </div>
      </div>
    }
  `,
  styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent {
  protected readonly modalService = inject(ModalService);

  protected formData = {
    name: '',
    email: '',
    organization: '',
    message: '',
  };

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    if (this.modalService.isOpen()) {
      this.modalService.closeModal();
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.modalService.closeModal();
    }
  }

  protected onSubmit(): void {
    this.modalService.submitInquiry();
  }
}
