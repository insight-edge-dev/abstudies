import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import CourseCard from './CourseCard.jsx';
import courses from './courseData.js';
import './Courses.css';

function Courses({ items = courses }) {
  const [visibleCourses, setVisibleCourses] = useState(items);
  const trackRef = useRef(null);

  useEffect(() => {
    setVisibleCourses(items);
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || visibleCourses.length < 2) return undefined;

    let animation;
    const autoplayId = window.setInterval(() => {
      const firstCard = track.firstElementChild;

      if (!firstCard) return;

      animation = track.animate(
        [
          { transform: 'translate3d(0, 0, 0)' },
          {
            transform: `translate3d(-${firstCard.getBoundingClientRect().width}px, 0, 0)`,
          },
        ],
        {
          duration: 1500,
          easing: 'ease',
          fill: 'forwards',
        },
      );

      animation.addEventListener(
        'finish',
        () => {
          flushSync(() => {
            setVisibleCourses(([firstCourse, ...remainingCourses]) => [
              ...remainingCourses,
              firstCourse,
            ]);
          });
          animation.cancel();
        },
        { once: true },
      );
    }, 5000);

    return () => {
      window.clearInterval(autoplayId);
      animation?.cancel();
    };
  }, [visibleCourses.length]);

  return (
    <section className="container-fluid px-0 py-5">
      <div className="row mx-0 justify-content-center pt-5">
        <div className="col-lg-6">
          <div className="section-title text-center position-relative mb-4">
            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
              Our Services
            </h6>
            <h1 className="display-4">
              Discover Our Newest Learning Experiences
            </h1>
          </div>
        </div>
      </div>

      <div className="owl-carousel courses-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div ref={trackRef} className="owl-stage courses-carousel__track">
            {visibleCourses.map((course) => (
              <div
                className="owl-item courses-carousel__item"
                key={course.title}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row justify-content-center bg-image mx-0 mb-5">
        <div className="col-lg-6 py-5">
          <div className="bg-white p-5 my-5">
            <h1 className="text-center mb-4">30% Off For New Students</h1>
            <form>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="courses-signup__input form-control bg-light border-0"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="courses-signup__input form-control bg-light border-0"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <select
                      className="courses-signup__control custom-select bg-light border-0 px-3"
                      defaultValue=""
                    >
                      <option value="">Select A courses</option>
                      <option value="1">courses 1</option>
                      <option value="2">courses 1</option>
                      <option value="3">courses 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <button
                    className="courses-signup__control btn btn-primary btn-block"
                    type="submit"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
