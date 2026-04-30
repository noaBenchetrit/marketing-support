'use client';

import { useDemoModal } from '@/components/landing/DemoModalProvider';

const Check11 = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Bento() {
  const { open } = useDemoModal();

  return (
    <section className="bento" id="bento">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le produit</span>
          <h2>On a déjà tout prévu.</h2>
          <p className="lead">
            Des solutions prêtes à l&apos;emploi pour chaque tâche qui vous fait perdre du temps.
          </p>
        </div>

        <div className="bento-row">
          <div className="bento-grid">
          {/* A : Large */}
          <div className="bento-card bento-a reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <h3>La fiche d&apos;opération qui se remplit toute seule.</h3>
            <p>
              Vos relevés terrain alimentent directement les fiches BAR-TH, BAR-EN ou IND-UT.
              Le CRM contrôle, calcule et prépare le dépôt PNCEE pour vous.
            </p>

            <div className="visual-wrap">
              <div className="signature-sheet">
                <div className="sig-head">
                  <div>
                    <div className="sig-title">Fiche BAR-TH-104 · Chaudière biomasse</div>
                    <div className="sig-sub">Bénéficiaire · 14/12/2026</div>
                  </div>
                  <span className="pill">Auto</span>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar"></div>Identité bénéficiaire
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar b"></div>Caractéristiques équipement
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar o"></div>Calcul kWh cumac
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar"></div>Pièces justificatives
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B : Medium */}
          <div className="bento-card bento-b reveal delay-1">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 4 4 5-5" />
              </svg>
            </div>
            <h3>Calculs cumac instantanés.</h3>
            <p>
              Toutes les fiches d&apos;opération à jour. Vos kWh cumac sont calculés et vérifiés à
              la source — fini les recalculs sur Excel.
            </p>
          </div>

          {/* C : Small */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" strokeWidth="2" />
              </svg>
            </div>
            <h3>Audit RGE Zen.</h3>
            <p>Vos preuves OPQIBI / Qualibat sont archivées et prêtes en un clic.</p>
          </div>

          {/* D : Small */}
          <div className="bento-card bento-d reveal delay-3">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <h3>Trésorerie boostée.</h3>
            <p>Encaissez vos primes CEE dès la validation PNCEE, sans dossier bloqué.</p>
          </div>
          </div>

          <aside className="bento-aside reveal delay-2">
            <button
              type="button"
              className="btn btn-accent btn-large bento-cta"
              onClick={() => open({ source: 'audits-bento' })}
            >
              Voir ces outils en action
              <svg
                className="arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
