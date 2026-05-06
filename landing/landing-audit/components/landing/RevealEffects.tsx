'use client';

import { useEffect } from 'react';

export default function RevealEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
          } else {
            e.target.classList.remove('in');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
