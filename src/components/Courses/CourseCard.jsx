import { memo } from 'react';
import { Link } from 'react-router';

import './Courses.css';

function CourseCard({ slug, title, image, detailHref, variant = 'carousel' }) {
  const coursePath = detailHref ?? `/courses/${slug}`;

  if (variant === 'list') {
    return (
      <Link
        className="courses-list-item ui-card position-relative d-block overflow-hidden mb-2"
        to={coursePath}
      >
        <img
          className="img-fluid"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <div className="courses-text">
          <h3 className="h4 text-center text-white px-3">{title}</h3>
          <div className="border-top w-100 mt-3"></div>
        </div>
      </Link>
    );
  }

  return (
    <article className="courses-item ui-card position-relative">
      <img
        className="img-fluid"
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
      />
      <div className="courses-text">
        <h3 className="h4 text-center text-white px-3">{title}</h3>
        <div className="border-top w-100 mt-3"></div>
        <div className="w-100 bg-white text-center p-4">
          <Link className="btn btn-primary" to={coursePath}>
            Course Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

export default memo(CourseCard);
