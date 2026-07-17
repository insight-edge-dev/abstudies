import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router';

const MotionLink = motion.create(Link);

function RelatedCourseCard({ course }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionLink
      to={`/courses/${course.slug}`}
      className="courses-list-item related-course-card"
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <img
        src={course.image}
        className="img-fluid"
        alt={course.shortTitle}
        loading="lazy"
        decoding="async"
      />
      <h3 className="h5 text-center text-white mt-2">{course.shortTitle}</h3>
    </MotionLink>
  );
}

export default RelatedCourseCard;
