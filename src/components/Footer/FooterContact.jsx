function FooterContact({ contacts, socials }) {
  return (
    <div className="col-md-4 mb-5">
      <h2 className="footer__heading text-white mb-4">Get In Touch</h2>
      {contacts.map(({ Icon, text }) => (
        <p className="footer__contact-item" key={text}>
          <Icon className="footer__contact-icon mr-2" aria-hidden="true" />
          {text}
        </p>
      ))}
      <div className="d-flex justify-content-start mt-4">
        {socials.map(({ label, href, icon }, index) => (
          <a
            className={`text-white${index < socials.length - 1 ? ' mr-4' : ''}`}
            href={href}
            aria-label={label}
            key={label}
          >
            <i className={icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterContact;
