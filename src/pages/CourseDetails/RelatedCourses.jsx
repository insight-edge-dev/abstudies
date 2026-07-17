import { useEffect, useState } from 'react';

import RelatedCourseCard from './RelatedCourseCard.jsx';

function RelatedCourses({ courses }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % courses.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [courses.length]);

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
    <section aria-labelledby="related-courses-title">
      <h3 className="mb-3" id="related-courses-title">
        Related Courses
      </h3>
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
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="owl-next"
            aria-label="Next related course"
            onClick={showNext}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default RelatedCourses;
