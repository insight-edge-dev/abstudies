import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import './Hero.css';

function Hero({
  eyebrow = 'Your Gateway to Excellence!',
  title = 'A safe and joyful place for your lovely children',
  descriptionLead = 'Give your child the advantages of well-rounded education at',
  brandName = 'AB Studies',
  descriptionTail = 'We offer exceptional academics and engaging extracurricular activities to ensure their success and growth.',
  ctaHref = '/contact',
  ctaLabel = 'Enroll your kid',
  rating = '4.8 rating on Google',
}) {
  const shouldReduceMotion = useReducedMotion();
  const enter = (delay = 0) => ({
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
      ease: 'easeOut',
    },
  });

  return (
    <section className="hero jumbotron jumbotron-fluid position-relative overflow-hidden overlay-bottom">
      <motion.div
        className="hero__background"
        aria-hidden="true"
        initial={{ scale: shouldReduceMotion ? 1 : 1.025 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
      />
      <div className="hero__content container position-relative text-center my-5 py-5">
        <motion.p className="hero__eyebrow text-white mt-4 mb-4" {...enter()}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="text-white display-1 mb-5" {...enter(0.08)}>
          {title}
        </motion.h1>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <motion.p className="hero__description text-white" {...enter(0.16)}>
              {descriptionLead} <strong>{brandName}</strong>. {descriptionTail}
            </motion.p>

            <motion.div
              className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3"
              {...enter(0.24)}
            >
              <Link
                to={ctaHref}
                className="hero__cta btn btn-dark btn-lg mb-3 mb-md-0 mr-md-4"
              >
                {ctaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <div className="d-flex align-items-center">
                <span className="hero__stars" aria-hidden="true">
                  ★★★★★
                </span>
                <small className="text-white-50">{rating}</small>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
