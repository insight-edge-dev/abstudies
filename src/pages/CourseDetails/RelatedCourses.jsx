import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import RelatedCourseCard from './RelatedCourseCard.jsx';

function RelatedCourses({ courses }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % courses.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [courses.length, shouldReduceMotion]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + courses.length) % courses.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % courses.length);
  };

  const orderedCourses = courses.map(
    (_, index) => courses[(activeIndex + index) % courses.length],
  );

  return (
    <section
      className="related-courses-section"
      aria-labelledby="related-courses-title"
    >
      <h2 id="related-courses-title">Related Courses</h2>
      <div className="owl-carousel related-carousel">
        <div className="related-carousel__viewport">
          <div className="related-carousel__track">
            {orderedCourses.map((course) => (
              <RelatedCourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
        <div className="owl-nav">
          <button
            type="button"
            className="owl-prev"
            aria-label="Previous related course"
            onClick={showPrevious}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="owl-next"
            aria-label="Next related course"
            onClick={showNext}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default RelatedCourses;
