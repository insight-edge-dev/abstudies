import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import useCountUp from '../../hooks/useCountUp.js';
import './About.css';

function StatCard({ value, label, detail, backgroundClass }) {
  const { elementRef, value: displayedValue } = useCountUp(value);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="col-3 px-0">
      <motion.div
        className={`${backgroundClass} stat-card text-center p-4`}
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <strong
          ref={elementRef}
          className="stat-card__value d-block text-white"
          data-toggle="counter-up"
        >
          {displayedValue}
        </strong>
        <span className="stat-card__label d-block text-uppercase text-white">
          {label}
          <span className="d-block">{detail}</span>
        </span>
      </motion.div>
    </div>
  );
}

export default memo(StatCard);
