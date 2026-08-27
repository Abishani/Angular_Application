export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  imageSrc: string;
  altText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorRole: string;
  organization: string;
  location?: string;
}

export interface Partner {
  id: string;
  name: string;
  subtitle?: string;
  locationDetails: string;
  logoType: 'cefco' | 'sawi';
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'x' | 'instagram' | 'pinterest' | 'linkedin' | 'tiktok' | 'youtube';
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  program: string;
  message: string;
}
