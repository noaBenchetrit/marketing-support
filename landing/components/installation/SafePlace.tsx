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
            <span className="eyebrow">La réassurance décennale</span>
            <h2>Une preuve, pour toujours.</h2>
            <p className="lead">
              Archivage légal de 10 ans, données chiffrées AES-256, support expert dédié. Vos chantiers
              tiennent face aux contrôles, aux contentieux et au temps.
            </p>

            <div className="safe-features safe-features-grid">
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
                  <span>Stockage immuable de vos dossiers pour les contrôles, le SAV décennal et l&apos;Anah.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <strong>Chiffrement de niveau bancaire</strong>
                  <span>AES-256, hébergement souverain France, OVHcloud certifié. Vos données ne sortent jamais.</span>
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
                  <span>Vos ouvriers consultent les dossiers depuis le chantier, en mode hors-connexion possible.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
                    <polyline points="14 6 17 9" />
                  </svg>
                </div>
                <div>
                  <strong>Signatures électroniques eIDAS via Certigna</strong>
                  <span>Vos contrats et PV de réception ont une valeur juridique incontestable.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safe-support safe-support--full reveal delay-2">
          <div className="support-avatar">CS</div>
          <div className="safe-support-text">
            <strong>Une équipe à Paris qui répond en moins de 2h.</strong>
            <span>Customer Success qui parle votre métier · accompagnement RGE inclus.</span>
          </div>
          <div className="support-pulse">En ligne</div>
          <button
            type="button"
            className="btn btn-primary safe-cta"
            onClick={() =>
              open({ source: 'safe-place', ctaLabel: 'Être recontacté par un expert beTool Install' })
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
