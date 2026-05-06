'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: 1,
    title: 'Collecte',
    text: 'Saisie sur mobile ou tablette via vos checklists personnalisées, sur site, en mode hors-connexion possible.',
  },
  {
    num: 2,
    title: 'Diagnostic Assisté',
    text: 'Passez vos pièces critiques au crible de l’IA pour confirmer les dates et les signatures sans lecture manuelle.',
  },
  {
    num: 3,
    title: 'Certification',
    text: 'Signature électronique sur place et scellage horodaté Certigna des documents.',
  },
  {
    num: 4,
    title: 'Diffusion',
    text: 'Envoi automatique du rapport et des tâches de suivi par mail ou SMS au client.',
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

  const thresholds = [0.05, 0.35, 0.65, 0.92];

  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <div className="workflow-head reveal">
          <span className="eyebrow">Le flux de la certitude</span>
          <h2>
            Du terrain au client, en <strong>4 étapes</strong>.
          </h2>
          <p className="lead">Chaque étape ferme la précédente. Aucune rupture, aucune perte d&apos;information.</p>
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
