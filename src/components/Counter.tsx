"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const duration = 1400;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setVal(Math.floor(p * end));
              if (p < 1) requestAnimationFrame(step);
              else setVal(end);
            };
            requestAnimationFrame(step);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-brand-red">
        {val}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/60">
        {label}
      </div>
    </div>
  );
}
