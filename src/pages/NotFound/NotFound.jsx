import { ArrowLeft, BookOpen, SearchX } from 'lucide-react';
import { Link } from 'react-router';

import MotionSection from '../../components/Motion/MotionSection.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import './NotFound.css';

function NotFoundPage() {
  return (
    <PageLayout
      title="404"
      showBreadcrumb={false}
      seoTitle="Page Not Found | AB Studies"
      seoPath="/404"
      seoNoIndex
      seoIncludeCanonical={false}
    >
      <MotionSection className="not-found container-fluid py-5">
        <div className="container py-5 text-center">
          <div className="not-found__icon mx-auto" aria-hidden="true">
            <SearchX />
          </div>
          <p className="not-found__eyebrow text-secondary text-uppercase">
            Error 404
          </p>
          <h2 className="not-found__title">This page could not be found</h2>
          <p className="not-found__description mx-auto">
            The page you are looking for may have been moved, renamed, or is no
            longer available. Let&apos;s get you back to learning.
          </p>
          <div className="not-found__actions d-flex flex-column flex-sm-row justify-content-center">
            <Link className="btn btn-primary" to="/">
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Home
            </Link>
            <Link className="btn btn-outline-primary" to="/courses">
              <BookOpen size={18} aria-hidden="true" />
              Explore Courses
            </Link>
          </div>
        </div>
      </MotionSection>
    </PageLayout>
  );
}

export default NotFoundPage;
