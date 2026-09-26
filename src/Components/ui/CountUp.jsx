import { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";

/** Animates 0 → value once visible. Respects prefers-reduced-motion. */
const CountUp = ({ value, decimals = 0, suffix = "", duration = 1400 }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = reduced ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
