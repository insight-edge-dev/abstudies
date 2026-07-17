import { motion, useReducedMotion } from 'framer-motion';

function FounderCard({ name, role, description, image, accentClass }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="col-lg-6 d-flex mb-4">
      <motion.article
        className={`about-founder-card ${accentClass} d-flex align-items-center bg-white p-4`}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <img
          src={image}
          className="about-founder-card__image rounded-circle mr-4"
          alt={name}
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 className="h4 mb-1">{name}</h3>
          <h6 className="text-muted mb-2">{role}</h6>
          <p className="mb-0">{description}</p>
        </div>
      </motion.article>
    </div>
  );
}

export default FounderCard;
