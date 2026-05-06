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
                stroke="#0A9396"
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
            <span className="eyebrow">La robustesse</span>
            <h2>Vos chantiers, vos données, votre sérénité.</h2>
            <p className="lead">
              Hébergement souverain, archivage légal de 10 ans, synchronisation cloud chiffrée pour vos
              techniciens sur le terrain.
            </p>

            <div className="safe-features safe-features-grid">
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <strong>RGPD &amp; souveraineté</strong>
                  <span>Données clients hébergées exclusivement en France, OVHcloud certifié.</span>
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
                  <strong>Archivage légal 10 ans</strong>
                  <span>Stockage immuable de vos dossiers pour les contrôles COPRO et le SAV décennal.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <div>
                  <strong>Accès terrain sécurisé</strong>
                  <span>Synchronisation cloud chiffrée pour vos techniciens, mode hors-connexion possible.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safe-support safe-support--full reveal delay-2">
          <div className="support-avatar">CS</div>
          <div className="safe-support-text">
            <strong>Une équipe Customer Success qui parle votre métier.</strong>
            <span>Basée à Paris · réponse sous 2h ouvrées · accompagnement RGE inclus.</span>
          </div>
          <div className="support-pulse">En ligne</div>
          <button
            type="button"
            className="btn btn-primary safe-cta"
            onClick={() =>
              open({ source: 'safe-place', ctaLabel: 'Discuter avec un expert beTool Install' })
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
