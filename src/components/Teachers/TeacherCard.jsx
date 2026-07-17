import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function TeacherCard({ name, qualification, image, socials = [] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="team-item ui-card"
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <img
        className="img-fluid w-100"
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
      />
      <div className="bg-light text-center p-4">
        <h3 className="h5 mb-3">{name}</h3>
        <p className="mb-2">{qualification}</p>
        {socials.length ? (
          <div className="d-flex justify-content-center">
            {socials.map(({ label, icon, href }) => (
              <a
                className="mx-1 p-1"
                href={href}
                aria-label={`${name} on ${label}`}
                key={label}
              >
                <i className={icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default memo(TeacherCard);
