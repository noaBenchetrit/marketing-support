'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'sec-hero', label: 'Accueil' },
  { id: 'sec-1', label: 'Performance commerciale' },
  { id: 'sec-2', label: 'Planning intelligent' },
  { id: 'sec-3', label: 'Gestion administrative' },
  { id: 'sec-4', label: 'Conformité absolue' },
  { id: 'sec-form', label: 'Demander un accès' },
];

export default function SectionDots() {
  const [active, setActive] = useState('sec-hero');

  useEffect(() => {
    const els = SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="deck-dots" aria-label="Navigation des sections">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-label={s.label}
          className={`deck-dot${active === s.id ? ' is-active' : ''}`}
          aria-label={s.label}
          aria-current={active === s.id ? 'true' : undefined}
        />
      ))}
    </nav>
  );
}
