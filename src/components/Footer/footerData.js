import { siteContact } from '../../utils/siteContact.js';

export const contactItems = [
  {
    icon: 'fa fa-map-marker-alt',
    text: siteContact.address,
  },
  { icon: 'fa fa-phone-alt', text: siteContact.phone },
  { icon: 'fa fa-envelope', text: siteContact.email },
];

export const socialLinks = [
  { label: 'Twitter', href: '#', icon: 'fab fa-2x fa-twitter' },
  { label: 'Facebook', href: '#', icon: 'fab fa-2x fa-facebook-f' },
  { label: 'LinkedIn', href: '#', icon: 'fab fa-2x fa-linkedin-in' },
  { label: 'Instagram', href: '#', icon: 'fab fa-2x fa-instagram' },
];

export const serviceLinks = [
  { label: 'Web Design', href: '#' },
  { label: 'Apps Design', href: '#' },
  { label: 'Marketing', href: '#' },
  { label: 'Research', href: '#' },
  { label: 'SEO', href: '#' },
];

export const quickLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Condition', href: '#' },
  { label: 'Contact', href: '/contact' },
];
