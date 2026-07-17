import { mapEmbedUrl, siteContact } from '../../utils/siteContact.js';

const contactItems = [
  {
    title: 'Our Location',
    value: siteContact.address,
    icon: 'fa fa-2x fa-map-marker-alt text-white',
    iconBackground: 'bg-primary',
  },
  {
    title: 'Call Us',
    value: siteContact.phone,
    icon: 'fa fa-2x fa-phone-alt text-white',
    iconBackground: 'bg-secondary',
  },
  {
    title: 'Email Us',
    value: siteContact.email,
    icon: 'fa fa-2x fa-envelope text-white',
    iconBackground: 'bg-warning',
  },
];

export { mapEmbedUrl };

export default contactItems;
