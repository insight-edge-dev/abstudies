import { useState } from 'react';

import navigationItems from './navigation.js';

function Navbar({
  items = navigationItems,
  activeHref = 'index.html',
  brandHref = 'index.html',
  brandLabel = 'AB STUDIES',
  joinHref = '',
  joinLabel = 'Join Us',
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const closeMenu = () => setIsExpanded(false);

  return (
    <div className="container-fluid p-0">
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5"
        aria-label="Primary navigation"
      >
        <a href={brandHref} className="navbar-brand ml-lg-3">
          <h1 className="m-0 text-uppercase text-primary">
            <i className="fa fa-book-reader mr-3" aria-hidden="true"></i>
            {brandLabel}
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between px-lg-3${isExpanded ? ' show' : ''}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto py-0">
            {items.map(({ label, href }) => {
              const isActive = href === activeHref;

              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-item nav-link${isActive ? ' active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              );
            })}
          </div>
          <a
            href={joinHref}
            className="btn btn-primary py-2 px-4 d-none d-lg-block"
          >
            {joinLabel}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
