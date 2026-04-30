'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUpOnView(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setValue(Math.round(target * ease(p)));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

export default function Satisfaction() {
  const days = useCountUpOnView(14);
  const renew = useCountUpOnView(98);
  const ops = useCountUpOnView(7);

  return (
    <section className="satisfaction">
      <div className="container">
        <div className="sat-row">
          <div className="sat-item reveal">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <strong>
                <span ref={days.ref}>{days.value}</span> jours d&apos;essai gratuit
              </strong>
              <span>Sans carte bancaire. Sans engagement.</span>
            </div>
          </div>
          <div className="sat-item reveal delay-1">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <strong>
                <span ref={renew.ref}>{renew.value}</span>% de clients renouvellent
              </strong>
              <span>Si beTool ne vous convient pas, on rembourse.</span>
            </div>
          </div>
          <div className="sat-item reveal delay-2">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <strong>
                Opérationnel en <span ref={ops.ref}>{ops.value}</span> jours
              </strong>
              <span>Onboarding et migration inclus.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
