'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { num: 1, title: 'Connectez', text: 'Importez vos formations et vos stagiaires en quelques secondes.' },
  { num: 2, title: 'Automatisez', text: 'Le CRM pilote les conventions, les émargements et les relances.' },
  {
    num: 3,
    title: 'Encaissez',
    text: 'Vos dossiers sont parfaits, votre financement est sécurisé. Vous respirez.',
  },
];

export default function Workflow() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.3;
      const pct = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setProgress(pct);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const thresholds = [0.08, 0.5, 0.92];

  return (
    <section className="workflow">
      <div className="container">
        <div className="workflow-head reveal">
          <span className="eyebrow">Le flux</span>
          <h2>
            De <strong>3 heures</strong> à <strong>3 minutes</strong>.
          </h2>
          <p className="lead">Trois étapes. Aucune friction.</p>
        </div>

        <div
          className="steps"
          ref={stepsRef}
          style={{ '--steps-progress': progress } as React.CSSProperties}
        >
          <span className="steps-progress" aria-hidden="true"></span>
          {STEPS.map((s, i) => {
            const active = progress >= thresholds[i]!;
            return (
              <div
                key={s.num}
                className={`step${active ? ' step--active' : ''}`}
              >
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
