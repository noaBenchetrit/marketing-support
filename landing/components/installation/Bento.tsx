'use client';

import { useDemoModal } from './DemoModalProvider';

export default function Bento() {
  const { open } = useDemoModal();

  return (
    <section className="bento" id="bento">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">La maîtrise opérationnelle</span>
          <h2>Suivez l&apos;avancement, maîtrisez vos marges.</h2>
          <p className="lead">
            Trois piliers métier pour piloter la rentabilité, déclencher la facturation et sécuriser la
            preuve — sans ressaisie.
          </p>
        </div>

        <div className="bento-grid">
          {/* A : Large — Suivi & Marges */}
          <div className="bento-card bento-a reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <h3>Dashboard de rentabilité.</h3>
            <p>
              Calcul automatique des marges en temps réel. Comparez le devis initial au coût réel
              (matériaux + temps), ne travaillez plus à l&apos;aveugle.
            </p>

            <div className="suivi-mock" aria-hidden="true">
              <div className="suivi-rows">
                <div className="suivi-row">
                  <span className="suivi-label">Famille Lefèvre · PAC</span>
                  <div className="suivi-bar"><span className="suivi-bar-fill" style={{ width: '78%' }} /></div>
                  <span className="suivi-pct">78&nbsp;%</span>
                </div>
                <div className="suivi-row">
                  <span className="suivi-label">Bertrand · Isolation</span>
                  <div className="suivi-bar"><span className="suivi-bar-fill" style={{ width: '52%' }} /></div>
                  <span className="suivi-pct">52&nbsp;%</span>
                </div>
                <div className="suivi-row">
                  <span className="suivi-label">SCI Marais · Photovoltaïque</span>
                  <div className="suivi-bar"><span className="suivi-bar-fill" style={{ width: '92%' }} /></div>
                  <span className="suivi-pct">92&nbsp;%</span>
                </div>
              </div>

              <div className="map-stats">
                <div className="map-stat">
                  <strong>+22&nbsp;%</strong>
                  <span>marge moyenne</span>
                </div>
                <div className="map-stat">
                  <strong>184&nbsp;600&nbsp;€</strong>
                  <span>CA en cours</span>
                </div>
              </div>
            </div>

            <div className="bento-cert" aria-label="Certification comptable">
              <div className="bento-cert-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="bento-cert-text">
                <strong>Certifié conforme aux règles comptables BTP</strong>
                <span>Calculs basés sur les déboursés secs et frais de structure réels.</span>
              </div>
            </div>

            <div className="bento-trust" aria-label="Garanties">
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Recalcul à chaque étape
              </span>
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Marge nette par chantier
              </span>
            </div>
          </div>

          {/* B : Medium — Facturation à l'avancement */}
          <div className="bento-card bento-b reveal delay-1">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3>Facturation à l&apos;avancement.</h3>
            <p>
              Déclenchez vos situations de travaux en un clic dès qu&apos;une étape est validée sur le terrain.
              Trésorerie nette, encaissements anticipés.
            </p>

            <div className="conformity-mock" aria-hidden="true">
              <div className="conformity-doc">
                <div className="conformity-doc-head">
                  <span className="conformity-doc-stamp">FACTURE 2026-014 · PALIER 3 / 4</span>
                </div>
                <div className="conformity-line"></div>
                <div className="conformity-line conformity-line--short"></div>
                <div className="conformity-line conformity-line--rfr">
                  <span className="conformity-line-label">Acompte palier :</span>
                  <span className="conformity-line-value">4 800 €</span>
                </div>
                <div className="conformity-line conformity-line--med"></div>
              </div>
              <div className="conformity-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Émise auto · J+0
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

          {/* C : Wide — Photos & Journal */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <h3>Preuve terrain.</h3>
            <p>
              Journal de bord photo horodaté. Chaque geste est documenté, chaque litige est évité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
