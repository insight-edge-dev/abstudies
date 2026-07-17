import { Link } from 'react-router';

function RelatedCourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="courses-list-item related-course-card"
    >
      <img src={course.image} className="img-fluid" alt="" />
      <h5 className="text-center text-white mt-2">{course.shortTitle}</h5>
    </Link>
  );
}

export default RelatedCourseCard;
