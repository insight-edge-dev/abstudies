function FooterLinkColumn({ title, links }) {
  return (
    <div className="col-md-4 mb-5">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex flex-column justify-content-start">
        {links.map(({ label, href }, index) => (
          <a
            className={`text-white-50${index < links.length - 1 ? ' mb-2' : ''}`}
            href={href}
            key={label}
          >
            <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkColumn;
