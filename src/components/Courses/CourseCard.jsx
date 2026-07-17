import { Link } from 'react-router';

function CourseCard({ slug, title, image, detailHref, variant = 'carousel' }) {
  const coursePath = detailHref ?? `/courses/${slug}`;

  if (variant === 'list') {
    return (
      <Link
        className="courses-list-item position-relative d-block overflow-hidden mb-2"
        to={coursePath}
      >
        <img className="img-fluid" src={image} alt="" />
        <div className="courses-text">
          <h4 className="text-center text-white px-3">{title}</h4>
          <div className="border-top w-100 mt-3"></div>
        </div>
      </Link>
    );
  }

  return (
    <article className="courses-item position-relative">
      <img className="img-fluid" src={image} alt="" />
      <div className="courses-text">
        <h4 className="text-center text-white px-3">{title}</h4>
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

export default CourseCard;
