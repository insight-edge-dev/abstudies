import { Mail, MapPin, Phone } from 'lucide-react';

import { mapEmbedUrl, siteContact } from '../../utils/siteContact.js';

const contactItems = [
  {
    title: 'Our Location',
    value: siteContact.address,
    Icon: MapPin,
    iconBackground: 'bg-primary',
  },
  {
    title: 'Call Us',
    value: siteContact.phone,
    Icon: Phone,
    iconBackground: 'bg-secondary',
  },
  {
    title: 'Email Us',
    value: siteContact.email,
    Icon: Mail,
    iconBackground: 'bg-warning',
  },
];

export { mapEmbedUrl };

export default contactItems;
