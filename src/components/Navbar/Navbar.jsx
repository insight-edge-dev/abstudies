import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router';

import logoImage from '../../assets/images/logo.jpeg';
import navigationItems from './navigation.js';
import './Navbar.css';

function Navbar({
  items = navigationItems,
  brandHref = '/',
  brandLabel = 'AB STUDIES',
  joinLabel = 'Join Us',
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 991.98px)').matches,
  );
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991.98px)');
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile || !isExpanded) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = 'hidden';

    const focusDrawer = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsExpanded(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusableElements = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusDrawer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (
        previouslyFocusedElement instanceof HTMLElement &&
        previouslyFocusedElement.isConnected
      ) {
        previouslyFocusedElement.focus();
      } else {
        menuButton?.focus();
      }
    };
  }, [isExpanded, isMobile]);

  const desktopNavigation = (
    <motion.div
      className="navbar-collapse navbar-drawer justify-content-between px-lg-3"
      id="navbarCollapse"
      initial={false}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className="navbar-nav mx-auto py-0">
        {items.map(({ label, to }) => {
          const isHomeRoute = to === '/';

          return (
            <NavLink
              key={to}
              to={to}
              end={isHomeRoute}
              className={({ isActive }) =>
                `nav-item nav-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          );
        })}
      </div>
      <Link
        to="/contact"
        className="navbar-join btn btn-primary py-2 px-4 d-none d-lg-block"
      >
        {joinLabel}
      </Link>
    </motion.div>
  );

  const mobileItems = items.filter(({ to }) => to !== '/team');

  const mobileNavigationLayer =
    typeof document === 'undefined'
      ? null
      : createPortal(
          <>
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  type="button"
                  className="navbar-backdrop"
                  aria-label="Close navigation menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    ease: 'easeInOut',
                  }}
                  onClick={() => setIsExpanded(false)}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isExpanded && (
                <motion.aside
                  ref={drawerRef}
                  id="navbarCollapse"
                  className="mobile-drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="mobile-drawer__header">
                    <Link
                      to={brandHref}
                      className="mobile-drawer__brand"
                      onClick={() => setIsExpanded(false)}
                    >
                      <span
                        className="navbar-brand__logo mobile-drawer__logo"
                        aria-hidden="true"
                      >
                        <img src={logoImage} alt="" />
                      </span>
                      <span>{brandLabel}</span>
                    </Link>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="mobile-drawer__close"
                      aria-label="Close navigation menu"
                      onClick={() => setIsExpanded(false)}
                    >
                      <X aria-hidden="true" />
                    </button>
                  </div>

                  <nav
                    className="mobile-drawer__nav"
                    aria-label="Mobile navigation links"
                  >
                    {mobileItems.map(({ label, to }) => (
                      <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                          `mobile-drawer__link${isActive ? ' active' : ''}`
                        }
                        onClick={() => setIsExpanded(false)}
                      >
                        <span>{label}</span>
                        <ArrowRight aria-hidden="true" />
                      </NavLink>
                    ))}
                  </nav>

                  <div className="mobile-drawer__footer">
                    <Link
                      to="/contact"
                      className="mobile-drawer__cta btn btn-primary"
                      onClick={() => setIsExpanded(false)}
                    >
                      <span>{joinLabel}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </>,
          document.body,
        );

  return (
    <header
      className={`navbar-shell sticky-top${isScrolled ? ' is-scrolled' : ''}`}
    >
      <div className="container-fluid p-0">
        <nav
          className="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5"
          aria-label="Primary navigation"
        >
          <Link to={brandHref} className="navbar-brand ml-lg-3">
            <span className="navbar-brand__title m-0 text-uppercase text-primary">
              <span className="navbar-brand__logo" aria-hidden="true">
                <img src={logoImage} alt="" />
              </span>
              {brandLabel}
            </span>
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="navbar-toggler"
            aria-controls="navbarCollapse"
            aria-expanded={isExpanded}
            aria-label={
              isExpanded ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isExpanded ? 'close' : 'menu'}
                initial={{
                  opacity: 0,
                  rotate: shouldReduceMotion ? 0 : -45,
                  scale: 0.8,
                }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  rotate: shouldReduceMotion ? 0 : 45,
                  scale: 0.8,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                  ease: 'easeOut',
                }}
                className="navbar-toggler__icon"
              >
                {isExpanded ? (
                  <X aria-hidden="true" />
                ) : (
                  <Menu aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          {isMobile ? mobileNavigationLayer : desktopNavigation}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
