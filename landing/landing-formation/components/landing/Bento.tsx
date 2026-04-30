'use client';

import { useDemoModal } from './DemoModalProvider';

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
                <path d="M3 17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4M12 3v12m0 0l-4-4m4 4l4-4" />
              </svg>
            </div>
            <h3>La signature qui travaille pour vous.</h3>
            <p>
              Vos stagiaires signent en un clic. Le CRM s&apos;occupe des relances automatiques jusqu&apos;à la
              clôture du dossier.
            </p>

            <div className="visual-wrap">
              <div className="signature-sheet">
                <div className="sig-head">
                  <div>
                    <div className="sig-title">Émargement — Jour 3</div>
                    <div className="sig-sub">Marketing Digital · 15/12/2026</div>
                  </div>
                  <span className="pill">Auto</span>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar"></div>Sophie Martin
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar b"></div>Karim Benabid
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar o"></div>Léa Dubois
                  </div>
                  <div className="sig-check done">
                    <Check11 />
                  </div>
                </div>
                <div className="sig-row">
                  <div className="name">
                    <div className="avatar"></div>Thomas Leroy
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
                <path d="M21 12c-1 6-5 9-9 9s-8-3-9-9c1-6 5-9 9-9s8 3 9 9z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Import EDOF instantané.</h3>
            <p>Connectez votre catalogue et synchronisez vos sessions sans double saisie. Une seule source de vérité.</p>
          </div>

          {/* C : Small */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <h3>Audit Zen.</h3>
            <p>Vos preuves Qualiopi sont archivées et prêtes en un clic.</p>
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
            <p>Facturez dès la fin de session sans attendre les papiers manquants.</p>
          </div>
          </div>

          <aside className="bento-aside reveal delay-2">
            <button
              type="button"
              className="btn btn-accent btn-large bento-cta"
              onClick={() => open({ source: 'bento' })}
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
