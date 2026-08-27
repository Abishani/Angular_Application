import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  readonly isOpen = signal<boolean>(false);
  readonly selectedProgram = signal<string>('General Advisory');
  readonly isSubmitted = signal<boolean>(false);

  openModal(programTitle: string = 'General Advisory'): void {
    this.selectedProgram.set(programTitle);
    this.isSubmitted.set(false);
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }

  submitInquiry(): void {
    this.isSubmitted.set(true);
  }
}
