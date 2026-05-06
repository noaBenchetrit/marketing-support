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

        <div className="bento-grid">
          {/* A : Large — Signature & Portail Stagiaire */}
          <div className="bento-card bento-a reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4M12 3v12m0 0l-4-4m4 4l4-4" />
              </svg>
            </div>
            <h3>L&apos;émargement numérique sans friction.</h3>
            <p>
              Signature certifiée eIDAS via Certigna avec horodatage légal. Vos dossiers sont clos en un clic,
              prêts pour le financement.
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

            <div className="bento-trust" aria-label="Garanties">
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Certifié Certigna
              </span>
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Signé en 12s
              </span>
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                Portail premium
              </span>
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
            <h3>Catalogue Qualiopi &amp; suivi du RAC.</h3>
            <p>
              Importez votre catalogue sans double saisie. Suivez le Reste à Charge (RAC) de chaque stagiaire
              pour une facturation sans erreur.
            </p>

            <div className="catalogue-mock" aria-hidden="true">
              <div className="catalogue-doc">
                <div className="catalogue-row">
                  <span className="catalogue-title">Marketing Digital</span>
                  <span className="catalogue-duration">35 h</span>
                  <span className="catalogue-stamp">Q</span>
                </div>
                <div className="catalogue-row">
                  <span className="catalogue-title">Bureautique avancée</span>
                  <span className="catalogue-duration">21 h</span>
                  <span className="catalogue-stamp">Q</span>
                </div>
              </div>
              <p className="bento-sync-status">
                <span className="bento-sync-pulse"></span>
                Catalogue conforme · Prêt à diffuser
              </p>
            </div>

            <button
              type="button"
              className="bento-link"
              onClick={() => open({ source: 'bento' })}
            >
              Voir la démo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* C : Small — Planning Intelligent */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3>Le planning qui anticipe tout.</h3>
            <p>
              Gestion des plannings formateurs et journal des absences automatisé.
            </p>

            <div className="planning-mock" aria-hidden="true">
              <div className="planning-grid">
                <div className="planning-day">
                  <span className="planning-day-label">Lun</span>
                  <div className="planning-day-cell">
                    <span className="planning-block planning-block--green" style={{ height: '45%', top: '10%' }}></span>
                  </div>
                </div>
                <div className="planning-day">
                  <span className="planning-day-label">Mar</span>
                  <div className="planning-day-cell">
                    <span className="planning-block planning-block--blue" style={{ height: '65%', top: '15%' }}></span>
                  </div>
                </div>
                <div className="planning-day">
                  <span className="planning-day-label">Mer</span>
                  <div className="planning-day-cell">
                    <span className="planning-block planning-block--orange" style={{ height: '30%', top: '15%' }}></span>
                    <span className="planning-block planning-block--green" style={{ height: '25%', top: '60%' }}></span>
                  </div>
                </div>
                <div className="planning-day">
                  <span className="planning-day-label">Jeu</span>
                  <div className="planning-day-cell">
                    <span className="planning-block planning-block--blue" style={{ height: '55%', top: '20%' }}></span>
                  </div>
                </div>
                <div className="planning-day">
                  <span className="planning-day-label">Ven</span>
                  <div className="planning-day-cell">
                    <span className="planning-block planning-block--orange" style={{ height: '75%', top: '10%' }}></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-accroche">Zéro doublon. Zéro double saisie.</div>
          </div>

          {/* D : Small */}
          <div className="bento-card bento-d reveal delay-3">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <h3>Votre Bilan Pédagogique (BPF) en 1 clic.</h3>
            <p>
              Centralisez les demandes et les pièces. Générez vos documents obligatoires et déclenchez vos
              paiements dès la fin de session.
            </p>

            <div className="bento-revenue" aria-hidden="true">
              <div className="bento-revenue-chart">
                <span style={{ height: '28%' }}></span>
                <span style={{ height: '42%' }}></span>
                <span style={{ height: '36%' }}></span>
                <span style={{ height: '58%' }}></span>
                <span style={{ height: '70%' }}></span>
                <span style={{ height: '82%' }}></span>
                <span style={{ height: '100%' }} className="active"></span>
              </div>
              <div className="bento-revenue-stat">
                <strong>+15%</strong>
                <span>de fonds disponibles</span>
              </div>
            </div>

            <div className="bento-bpf-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              BPF généré automatiquement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
