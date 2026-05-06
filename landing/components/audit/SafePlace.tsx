'use client';

import { useDemoModal } from './DemoModalProvider';

export default function SafePlace() {
  const { open } = useDemoModal();

  return (
    <section className="safe-place" id="safe">
      <div className="container">
        <div className="safe-grid">
          <div className="safe-visual reveal">
            <div className="shield-wrap">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#15375E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="safe-text reveal delay-1">
            <span className="eyebrow">La souveraineté</span>
            <h2>Une preuve, pour toujours.</h2>
            <p className="lead">
              Journal d&apos;audit immuable, hébergement souverain, secret professionnel strict. Chaque action est
              tracée, chaque document est protégé.
            </p>

            <div className="safe-features safe-features-grid">
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <strong>Piste d&apos;audit fiable</strong>
                  <span>Journal complet de chaque action : qui, quoi, quand. Inviolable.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <strong>Souveraineté française</strong>
                  <span>Serveurs 100&nbsp;% français OVHcloud, conformité RGPD totale.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <strong>Secret professionnel</strong>
                  <span>Chiffrement AES-256 des documents sensibles, NDA contractuel.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safe-support safe-support--full reveal delay-2">
          <div className="support-avatar">DPO</div>
          <div className="safe-support-text">
            <strong>Un DPO dédié, joignable directement.</strong>
            <span>Cellule confidentialité basée à Paris · réponse sous 2h ouvrées.</span>
          </div>
          <div className="support-pulse">En ligne</div>
          <button
            type="button"
            className="btn btn-primary safe-cta"
            onClick={() =>
              open({ source: 'safe-place', ctaLabel: 'Discuter avec un expert audit' })
            }
          >
            Discuter avec un expert
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
