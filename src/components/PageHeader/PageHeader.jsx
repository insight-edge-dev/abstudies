import { Link } from 'react-router';

import './PageHeader.css';

function PageHeader({
  title,
  showBreadcrumb = true,
  className = '',
  children,
}) {
  return (
    <header
      className={`page-header-section jumbotron jumbotron-fluid page-header position-relative overlay-bottom${className ? ` ${className}` : ''}`}
    >
      <div className="container text-center py-5">
        <h1 className="text-white display-1">{title}</h1>
        {showBreadcrumb ? (
          <div className="d-inline-flex text-white mb-5">
            <p className="m-0 text-uppercase">
              <Link className="text-white" to="/">
                Home
              </Link>
            </p>
            <i
              className="fa fa-angle-double-right pt-1 px-3"
              aria-hidden="true"
            ></i>
            <p className="m-0 text-uppercase">{title}</p>
          </div>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
