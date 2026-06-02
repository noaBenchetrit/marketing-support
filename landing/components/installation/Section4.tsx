'use client';

import { useDemoModal } from './DemoModalProvider';

export default function Section4() {
  const { open } = useDemoModal();

  return (
    <section id="sec-4" className="deck-section is-light">
      <span className="deck-orb orb-soft orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="eyebrow reveal reveal-left">04 — Conformité absolue</span>
            <h2 className="reveal reveal-left delay-1">
              Sécurisez vos financements sans risque de rejet.
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              Grâce à la puissance de notre IA, atteignez une conformité parfaite chez les
              obligés, délégataires et mandataires CEE.
            </p>
            <div className="sec-cta reveal reveal-left delay-3">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  open({
                    source: 'sec-4',
                    ctaLabel: 'Planifier ma démo',
                  })
                }
              >
                Planifier ma démo
              </button>
            </div>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 32px)' }}
          >
            <div className="stat-row reveal reveal-right delay-1">
              <div className="stat reveal stat-pop delay-2">
                <span className="stat-num">0%</span>
                <span className="stat-label">de rejet de vos dossiers</span>
              </div>
              <div className="stat reveal stat-pop delay-3">
                <span className="stat-num">100%</span>
                <span className="stat-label">de sérénité administrative</span>
              </div>
            </div>

            <p className="arg-callout reveal reveal-right delay-3">
              Notre algorithme scanne chaque pièce justificative pour détecter les anomalies
              avant l&apos;envoi.{' '}
              <strong>Résultat&nbsp;: 0% de rejet, 100% de sérénité.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
