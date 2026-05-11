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
                stroke="#00A878"
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
            <span className="eyebrow">La confiance</span>
            <h2>Vos données sont chez vous, en sécurité.</h2>
            <p className="lead">
              Souveraineté française, signatures eIDAS, registre RGPD automatisé et support humain — quatre
              garanties qui font de beTool une forteresse.
            </p>

            <div className="safe-features safe-features-grid">
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <strong>Souveraineté</strong>
                  <span>Hébergement 100&nbsp;% France sur OVHcloud, infrastructure certifiée.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <strong>Légalité</strong>
                  <span>Signature certifiée Certigna, niveau eIDAS, opposable aux OPCO et à la CDC.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div>
                  <strong>RGPD</strong>
                  <span>Registre de traitement automatisé pour vos stagiaires. Mises à jour continues.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <div>
                  <strong>Support</strong>
                  <span>Une équipe d&apos;experts basée en France, joignable en moins de 2 minutes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safe-support safe-support--full reveal delay-2">
          <div className="support-avatar">SA</div>
          <div className="safe-support-text">
            <strong>Une équipe support qui parle votre métier.</strong>
            <span>Customer Success basé à Paris · réponse sous 2h ouvrées.</span>
          </div>
          <div className="support-pulse">En ligne</div>
          <button
            type="button"
            className="btn btn-primary safe-cta"
            onClick={() =>
              open({ source: 'safe-place', ctaLabel: 'Être recontacté par un expert beTool' })
            }
          >
            Être recontacté par un expert
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
