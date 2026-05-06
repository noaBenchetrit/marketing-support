'use client';

import { useDemoModal } from './DemoModalProvider';

export default function Bento() {
  const { open } = useDemoModal();

  return (
    <section className="bento" id="bento">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">L&apos;expertise</span>
          <h2>La maîtrise opérationnelle, du terrain au rapport.</h2>
          <p className="lead">
            Trois capacités qui couvrent le quotidien de l&apos;auditeur — du terrain à la livraison.
          </p>
        </div>

        <div className="bento-grid">
          {/* A : Large — Scénarios de Contrôle Intelligents */}
          <div className="bento-card bento-a reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>Checklists dynamiques.</h3>
            <p>Créez vos scénarios de contrôle sans code. Interfaces pensées pour le mobile et la tablette, gros boutons compatibles gants de chantier.</p>

            <div className="checklist-mock" aria-hidden="true">
              <div className="checklist-item checklist-item--done">
                <span className="checklist-tick">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="checklist-label">Identification du site</span>
              </div>
              <div className="checklist-item checklist-item--done">
                <span className="checklist-tick">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="checklist-label">Vérification équipements</span>
              </div>
              <div className="checklist-item checklist-item--current">
                <span className="checklist-tick">
                  <span className="checklist-dot"></span>
                </span>
                <span className="checklist-label">Conformité documentaire</span>
                <span className="checklist-sub">5 sous-points · contextuels</span>
              </div>
              <div className="checklist-item checklist-item--pending">
                <span className="checklist-tick"></span>
                <span className="checklist-label">Sécurité incendie</span>
              </div>
              <div className="checklist-item checklist-item--pending">
                <span className="checklist-tick"></span>
                <span className="checklist-label">Synthèse et signature</span>
              </div>
            </div>

            <div className="bento-trust" aria-label="Garanties">
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Saisie mobile / tablette
              </span>
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Adaptatif en temps réel
              </span>
            </div>
          </div>

          {/* B : Medium — Analyse OCR à la demande */}
          <div className="bento-card bento-b reveal delay-1">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <line x1="7" y1="12" x2="17" y2="12" />
              </svg>
            </div>
            <h3>Analyse IA au clic.</h3>
            <p>Ne lisez plus vos PDF : scannez dates et certifications. Détection d&apos;anomalies en temps réel.</p>

            <div className="ocr-scan" aria-hidden="true">
              <div className="ocr-doc">
                <span className="ocr-doc-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </span>
                <span className="ocr-doc-name">Extincteur_PV.pdf</span>
                <span className="ocr-scan-btn">
                  <span className="ocr-scan-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      <line x1="7" y1="12" x2="17" y2="12" />
                    </svg>
                  </span>
                  Scanner avec l&apos;IA
                </span>
              </div>
              <div className="ocr-result">
                <span className="ocr-result-label">Date de validité extraite</span>
                <span className="ocr-result-date">12 / 03 / 2027</span>
                <span className="ocr-result-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Conforme
                </span>
              </div>
            </div>

            <button
              type="button"
              className="bento-link"
              onClick={() => open({ source: 'bento' })}
            >
              Voir la démo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* C : Rapports Haute-Précision */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h3>Rapports haute-précision.</h3>
            <p>Génération automatique de vos rapports PDF officiels pré-remplis. Exportation prête à l&apos;envoi dès la fin de mission.</p>

            <div className="report-mock" aria-hidden="true">
              <div className="report-page">
                <div className="report-page-head">
                  <span className="report-page-stamp">Rapport · #2026-014</span>
                  <span className="report-page-cert">✓ Signé</span>
                </div>
                <div className="report-line"></div>
                <div className="report-line report-line--short"></div>
                <div className="report-line"></div>
                <div className="report-line report-line--med"></div>
                <div className="report-line report-line--short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
