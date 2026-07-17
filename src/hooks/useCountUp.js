import { useEffect, useRef, useState } from 'react';

function useCountUp(target, { delay = 10, duration = 2000 } = {}) {
  const elementRef = useRef(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    let intervalId;
    const steps = duration / delay;

    const startCounter = () => {
      let step = 0;
      setValue(0);

      intervalId = window.setInterval(() => {
        step += 1;
        setValue(Math.round((target / steps) * step));

        if (step >= steps) {
          window.clearInterval(intervalId);
        }
      }, delay);
    };

    if (!('IntersectionObserver' in window)) {
      startCounter();
      return () => window.clearInterval(intervalId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startCounter();
        }
      },
      { threshold: 0 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, [delay, duration, target]);

  return { elementRef, value };
}

export default useCountUp;
