import { motion, useReducedMotion } from 'framer-motion';

function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  eyebrowClassName = 'd-inline-block position-relative text-secondary text-uppercase pb-2',
  descriptionClassName = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-title${className ? ` ${className}` : ''}`}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 18,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
    >
      <span className={`section-title__eyebrow ${eyebrowClassName}`}>
        {eyebrow}
      </span>
      <h2 className="display-4">{title}</h2>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
