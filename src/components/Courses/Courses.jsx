import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useReducedMotion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

import { createWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp.js';
import MotionSection from '../Motion/MotionSection.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import CourseCard from './CourseCard.jsx';
import courses from './courseData.js';
import './Courses.css';

const initialFormValues = {
  name: '',
  email: '',
  course: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEnrollmentForm(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.course) errors.course = 'Please select a course.';

  return errors;
}

function Courses({ items = courses }) {
  const [visibleCourses, setVisibleCourses] = useState(items);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const trackRef = useRef(null);
  const submitTimerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setVisibleCourses(items);
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || visibleCourses.length < 2 || shouldReduceMotion)
      return undefined;

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
  }, [shouldReduceMotion, visibleCourses.length]);

  useEffect(
    () => () => {
      window.clearTimeout(submitTimerRef.current);
    },
    [],
  );

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((currentErrors) => ({
        ...currentErrors,
        [name]: undefined,
      }));
    }
  };

  const handleEnrollmentSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const errors = validateEnrollmentForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length) return;

    const message = createWhatsAppMessage({
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      course: formValues.course,
    });
    const whatsappTab = window.open('about:blank', '_blank');

    if (whatsappTab) whatsappTab.opener = null;

    setIsSubmitting(true);
    submitTimerRef.current = window.setTimeout(() => {
      openWhatsApp(message, whatsappTab);
      setIsSubmitting(false);
    }, 450);
  };

  return (
    <MotionSection className="container-fluid px-0 py-5">
      <div className="row mx-0 justify-content-center pt-5">
        <div className="col-lg-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Discover Our Newest Learning Experiences"
            className="text-center position-relative mb-4"
          />
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
            <h2 className="text-center mb-4">30% Off For New Students</h2>
            <form noValidate onSubmit={handleEnrollmentSubmit}>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label
                      className="courses-signup__label"
                      htmlFor="signup-name"
                    >
                      Name
                    </label>
                    <input
                      id="signup-name"
                      name="name"
                      type="text"
                      className={`courses-signup__input form-control bg-light border-0${formErrors.name ? ' is-invalid' : ''}`}
                      placeholder="Your Name"
                      autoComplete="name"
                      value={formValues.name}
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={
                        formErrors.name ? 'signup-name-error' : undefined
                      }
                      onChange={handleFieldChange}
                    />
                    {formErrors.name ? (
                      <p
                        className="courses-signup__error"
                        id="signup-name-error"
                        role="alert"
                      >
                        {formErrors.name}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label
                      className="courses-signup__label"
                      htmlFor="signup-email"
                    >
                      Email
                    </label>
                    <input
                      id="signup-email"
                      name="email"
                      type="email"
                      className={`courses-signup__input form-control bg-light border-0${formErrors.email ? ' is-invalid' : ''}`}
                      placeholder="Your Email"
                      autoComplete="email"
                      value={formValues.email}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={
                        formErrors.email ? 'signup-email-error' : undefined
                      }
                      onChange={handleFieldChange}
                    />
                    {formErrors.email ? (
                      <p
                        className="courses-signup__error"
                        id="signup-email-error"
                        role="alert"
                      >
                        {formErrors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label
                      className="courses-signup__label"
                      htmlFor="signup-course"
                    >
                      Course
                    </label>
                    <select
                      id="signup-course"
                      name="course"
                      className={`courses-signup__control custom-select bg-light border-0 px-3${formErrors.course ? ' is-invalid' : ''}`}
                      value={formValues.course}
                      aria-invalid={Boolean(formErrors.course)}
                      aria-describedby={
                        formErrors.course ? 'signup-course-error' : undefined
                      }
                      onChange={handleFieldChange}
                    >
                      <option value="">Select a course</option>
                      {items.map(({ slug, title }) => (
                        <option value={title} key={slug}>
                          {title}
                        </option>
                      ))}
                    </select>
                    {formErrors.course ? (
                      <p
                        className="courses-signup__error"
                        id="signup-course-error"
                        role="alert"
                      >
                        {formErrors.course}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-sm-6">
                  <span
                    className="courses-signup__label courses-signup__label--spacer"
                    aria-hidden="true"
                  >
                    Submit
                  </span>
                  <button
                    className="courses-signup__control courses-signup__submit btn btn-primary btn-block"
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle
                          className="courses-signup__spinner"
                          aria-hidden="true"
                        />
                        Opening WhatsApp…
                      </>
                    ) : (
                      'Sign Up Now'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default Courses;
