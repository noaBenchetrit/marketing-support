'use client';

import { useEffect } from 'react';

export default function RevealEffects() {
  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isFresh = nav?.type === 'navigate' && !window.location.hash;
    if (!isFresh) return;

    const html = document.documentElement;
    html.classList.add('reveal-anim');

    const isInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight - 40 && rect.bottom > 0 && rect.height > 0;
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
      if (isInViewport(el)) el.classList.add('in');
      else io.observe(el);
    });

    return () => {
      io.disconnect();
      html.classList.remove('reveal-anim');
    };
  }, []);

  return null;
}
