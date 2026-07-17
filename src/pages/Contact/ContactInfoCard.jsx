import { motion, useReducedMotion } from 'framer-motion';

function ContactInfoCard({
  title,
  value,
  Icon,
  iconBackground,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`d-flex align-items-center${className ? ` ${className}` : ''}`}
      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className={`btn-icon ${iconBackground} mr-4`}>
        <Icon
          className="contact-info-card__icon text-white"
          aria-hidden="true"
        />
      </div>
      <div className="mt-n1">
        <h3 className="h4">{title}</h3>
        <p className="m-0">{value}</p>
      </div>
    </motion.div>
  );
}

export default ContactInfoCard;
