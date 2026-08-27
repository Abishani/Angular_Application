import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPageComponent } from './features/landing/landing-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactModalComponent } from './shared/components/modal/contact-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    ContactModalComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
