import { Link } from 'react-router';

import logoImage from '../../assets/images/logo.jpeg';

function FooterBrand() {
  return (
    <div className="col-12 mb-5">
      <Link to="/" className="footer__brand navbar-brand">
        <span className="footer__brand-logo" aria-hidden="true">
          <img src={logoImage} alt="" />
        </span>
        <span className="footer__brand-title">AB Studies</span>
      </Link>
      <p className="m-0">
        Your Gateway to Excellence! A safe and joyful place for your lovely
        children
      </p>
    </div>
  );
}

export default FooterBrand;
