import { Link } from 'react-router';

function FooterLinkColumn({ title, links }) {
  return (
    <div className="col-md-4 mb-5">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex flex-column justify-content-start">
        {links.map(({ label, href }, index) => {
          const className = `text-white-50${index < links.length - 1 ? ' mb-2' : ''}`;
          const content = (
            <>
              <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
              {label}
            </>
          );

          return href.startsWith('/') ? (
            <Link className={className} to={href} key={label}>
              {content}
            </Link>
          ) : (
            <a className={className} href={href} key={label}>
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterLinkColumn;
