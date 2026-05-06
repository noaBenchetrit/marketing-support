'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: 1,
    title: 'Capture',
    text: 'Qualification du prospect en visio ou sur le terrain, avec calcul des aides intégré au CRM.',
  },
  {
    num: 2,
    title: 'Contractualisation',
    text: 'Signature électronique du devis et du dossier CEE, sur tablette, en moins de 12 secondes.',
  },
  {
    num: 3,
    title: 'Pose',
    text: 'Planning optimisé, rapport de fin de travaux mobile avec photos avant/après horodatées.',
  },
  {
    num: 4,
    title: 'Encaissement',
    text: 'Dossier de prime complet et conforme, prêt à être envoyé à l’obligé sans erreur ni retour.',
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
          <span className="eyebrow">Le flux d&apos;action</span>
          <h2>
            De la poignée de main au <strong>paiement</strong>.
          </h2>
          <p className="lead">Quatre étapes. Zéro friction. Aucune ressaisie.</p>
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
