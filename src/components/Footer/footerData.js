import { Mail, MapPin, Phone } from 'lucide-react';

import { siteContact } from '../../utils/siteContact.js';
import courses from '../Courses/courseData.js';

export const contactItems = [
  {
    Icon: MapPin,
    text: siteContact.address,
  },
  { Icon: Phone, text: siteContact.phone },
  { Icon: Mail, text: siteContact.email },
];

export const socialLinks = [
  { label: 'Twitter', href: '#', icon: 'fab fa-2x fa-twitter' },
  { label: 'Facebook', href: '#', icon: 'fab fa-2x fa-facebook-f' },
  { label: 'LinkedIn', href: '#', icon: 'fab fa-2x fa-linkedin-in' },
  { label: 'Instagram', href: '#', icon: 'fab fa-2x fa-instagram' },
];

export const serviceLinks = courses.slice(0, 5).map(({ slug, title }) => ({
  label: title,
  href: `/courses/${slug}`,
}));

export const quickLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Condition', href: '#' },
  { label: 'Contact', href: '/contact' },
];
