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
            <span className="eyebrow">Sécurité &amp; confiance</span>
            <h2>Une place sûre pour votre activité.</h2>
            <p className="lead">
              Vos données sont hébergées en France. Vos signatures ont une valeur juridique légale. Notre veille
              réglementaire met votre CRM à jour dès qu&apos;un décret CPF change.
            </p>

            <div className="safe-features safe-features-grid">
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <strong>Serveurs souverains en France</strong>
                  <span>Hébergement OVH/Scaleway, infrastructure certifiée.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <strong>Conformité RGPD certifiée</strong>
                  <span>DPO dédié, registre des traitements à jour.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div>
                  <strong>Signature certifiée Certigna</strong>
                  <span>Certificat qualifié, valeur juridique opposable.</span>
                </div>
              </div>
              <div className="safe-feat">
                <div className="safe-feat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </div>
                <div>
                  <strong>Veille réglementaire intégrée</strong>
                  <span>Mises à jour automatiques à chaque évolution.</span>
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
              open({ source: 'safe-place', ctaLabel: 'Discuter avec un expert beTool' })
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
