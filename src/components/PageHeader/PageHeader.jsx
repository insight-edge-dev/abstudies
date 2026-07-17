import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import './PageHeader.css';

function PageHeader({ title, showBreadcrumb = true, className = '' }) {
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
            <ChevronRight
              className="page-header__chevron mx-2"
              aria-hidden="true"
            />
            <p className="m-0 text-uppercase">{title}</p>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default PageHeader;
