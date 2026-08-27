import { Injectable, signal } from '@angular/core';
import { AudienceCard, NavItem, Partner, SocialLink, Testimonial } from '../models/content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  readonly navItems = signal<NavItem[]>([
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'institutions', label: 'Institutions', href: '#institutions' },
    { id: 'executives', label: 'Executives', href: '#executives' },
    { id: 'companies', label: 'Companies', href: '#companies' },
    { id: 'help', label: 'Help', href: '#help' },
  ]);

  readonly heroData = signal({
    titlePart1: 'AI Education For',
    titlePart2: 'People ',
    highlightPart1: 'Who',
    highlightPart2: 'Make Decisions.',
    description:
      'Aintegrator Education trains institutions, executives and companies to understand AI in depth — from technology to adoption — with Swiss rigor and discretion.',
    ctaLabel: 'Get In Touch',
    backgroundImage: '/images/hero-bg.jpg',
  });

  readonly partners = signal<Partner[]>([
    {
      id: 'cefco',
      name: 'cefco',
      subtitle: 'CENTRE ROMAND EN FORMATION CONTINUE',
      locationDetails: '(Lausanne, French-speaking Switzerland)',
      logoType: 'cefco',
    },
    {
      id: 'sawi',
      name: 'sawi',
      subtitle: '',
      locationDetails: '(Zurich, German-language programs)',
      logoType: 'sawi',
    },
  ]);

  readonly audienceCards = signal<AudienceCard[]>([
    {
      id: 'institutions',
      title: 'For Training Institutions',
      description:
        'We design and deliver serious AI programs — from technical foundations to business, pedagogical and organizational dimensions. Proven at federal-certification level.',
      actionLabel: 'Build your AI program',
      imageSrc: '/images/institutions.jpg',
      altText: 'Modern training institution building with glass facade',
    },
    {
      id: 'executives',
      title: 'For Executives',
      description:
        'Confidential advisory for C-levels and senior leaders: understand AI without the noise, challenge your roadmap, and secure implementation decisions.',
      actionLabel: 'Talk confidentially',
      imageSrc: '/images/executives.jpg',
      altText: 'Executive leader working thoughtfully on laptop',
    },
    {
      id: 'companies',
      title: 'For Companies',
      description:
        'We educate leadership teams and senior staff to think clearly about AI — what it is, where it creates value, and how to adopt it without dependency.',
      actionLabel: 'Educate your leadership',
      imageSrc: '/images/companies.jpg',
      altText: 'Leadership team collaborating around a laptop in meeting room',
    },
  ]);

  readonly manifestoData = signal({
    leadText: "We Don't Sell Tools.",
    gradientTextPart1: 'We Build',
    gradientTextPart2: 'Understanding.',
    bodyText:
      'AI education that goes beyond prompting: technology, business impact, governance, data sovereignty and adoption. We work before, during and after implementation — including sovereign and proprietary solutions.',
  });

  readonly testimonials = signal<Testimonial[]>([
    {
      id: '1',
      quote:
        '“Aintegrator Education brought the depth and structure our federal-level AI program needed.”',
      authorRole: 'Program Director',
      organization: 'training institution, Lausanne',
    },
    {
      id: '2',
      quote:
        '“Finally someone who explains AI at board level — without the hype.”',
      authorRole: 'CEO',
      organization: 'Swiss SME (name withheld for confidentiality)',
    },
    {
      id: '3',
      quote:
        '“Our leadership team left with a clear view of where AI creates value — and where it doesn’t.”',
      authorRole: 'COO',
      organization: 'services company, Zurich',
    },
  ]);

  readonly ctaSectionData = signal({
    title: "Let's Talk.",
    subtitle: 'One confidential conversation. No commitment.',
    buttonText: 'Get In Touch',
  });

  readonly footerData = signal({
    location: 'Switzerland',
    websiteUrl: 'https://www.aintegrator.ch',
    websiteDisplay: 'www.aintegrator.ch',
    legalNoticeLabel: 'Legal notice',
    legalNoticeUrl: '#legal',
    copyright: '© 2026 Aintegrator Education. All rights reserved.',
  });

  readonly socialLinks = signal<SocialLink[]>([
    { id: 'x', name: 'X', url: 'https://x.com', icon: 'x' },
    { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { id: 'pinterest', name: 'Pinterest', url: 'https://pinterest.com', icon: 'pinterest' },
    { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { id: 'tiktok', name: 'TikTok', url: 'https://tiktok.com', icon: 'tiktok' },
    { id: 'youtube', name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  ]);
}
