import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import TeacherCard from './TeacherCard.jsx';
import teachers from './teacherData.js';
import './Teachers.css';

const GAP = 30;
const TRANSITION_DURATION = 1000;

function Teachers({ items = teachers }) {
  const [visibleTeachers, setVisibleTeachers] = useState(items);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    setVisibleTeachers(items);
  }, [items]);

  const showNextTeacher = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;

    if (!firstCard || animationRef.current) return;

    const distance = firstCard.getBoundingClientRect().width + GAP;
    const animation = track.animate(
      [
        { transform: 'translate3d(0, 0, 0)' },
        { transform: `translate3d(-${distance}px, 0, 0)` },
      ],
      {
        duration: TRANSITION_DURATION,
        easing: 'ease',
        fill: 'forwards',
      },
    );

    animationRef.current = animation;
    animation.addEventListener(
      'finish',
      () => {
        flushSync(() => {
          setVisibleTeachers(([firstTeacher, ...remainingTeachers]) => [
            ...remainingTeachers,
            firstTeacher,
          ]);
        });
        animation.cancel();
        animationRef.current = null;
      },
      { once: true },
    );
  }, []);

  const showPreviousTeacher = useCallback(() => {
    const track = trackRef.current;

    if (!track?.firstElementChild || animationRef.current) return;

    flushSync(() => {
      setVisibleTeachers((currentTeachers) => {
        const previousTeacher = currentTeachers.at(-1);
        return [previousTeacher, ...currentTeachers.slice(0, -1)];
      });
    });

    const firstCard = track.firstElementChild;
    const distance = firstCard.getBoundingClientRect().width + GAP;
    const animation = track.animate(
      [
        { transform: `translate3d(-${distance}px, 0, 0)` },
        { transform: 'translate3d(0, 0, 0)' },
      ],
      {
        duration: TRANSITION_DURATION,
        easing: 'ease',
      },
    );

    animationRef.current = animation;
    animation.addEventListener(
      'finish',
      () => {
        animationRef.current = null;
      },
      { once: true },
    );
  }, []);

  useEffect(() => {
    if (visibleTeachers.length < 2) return undefined;

    const autoplayId = window.setInterval(showNextTeacher, 5000);

    return () => {
      window.clearInterval(autoplayId);
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, [showNextTeacher, visibleTeachers.length]);

  return (
    <section className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center position-relative mb-5">
          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
            Instructors
          </h6>
          <h1 className="display-4">Meet Our Instructors</h1>
        </div>

        <div className="teachers-carousel owl-carousel team-carousel position-relative owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div ref={trackRef} className="owl-stage teachers-carousel__track">
              {visibleTeachers.map((teacher) => (
                <div
                  className="owl-item teachers-carousel__item"
                  key={teacher.name}
                >
                  <TeacherCard {...teacher} />
                </div>
              ))}
            </div>
          </div>

          <div className="owl-nav">
            <button
              type="button"
              className="owl-prev"
              aria-label="Previous instructor"
              onClick={showPreviousTeacher}
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="owl-next"
              aria-label="Next instructor"
              onClick={showNextTeacher}
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
