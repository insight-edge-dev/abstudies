import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function GalleryItem({ image, alt }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <motion.figure
        className="gallery-item ui-card mb-0"
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <img
          className="gallery-item__image w-100"
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </motion.figure>
    </div>
  );
}

export default memo(GalleryItem);
