import FooterBrand from './FooterBrand.jsx';
import FooterContact from './FooterContact.jsx';
import FooterCopyright from './FooterCopyright.jsx';
import FooterLinkColumn from './FooterLinkColumn.jsx';
import {
  contactItems,
  quickLinks,
  serviceLinks,
  socialLinks,
} from './footerData.js';
import NewsletterSignup from './NewsletterSignup.jsx';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__main container-fluid position-relative overlay-top bg-dark text-white-50 py-5">
        <div className="container mt-5 pt-5">
          <div className="row">
            <FooterBrand />
            <NewsletterSignup />
          </div>
          <div className="row">
            <FooterContact contacts={contactItems} socials={socialLinks} />
            <FooterLinkColumn title="Our Services" links={serviceLinks} />
            <FooterLinkColumn title="Quick Links" links={quickLinks} />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
