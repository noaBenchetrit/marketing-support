'use client';

import { useDemoModal } from './DemoModalProvider';

export default function Bento() {
  const { open } = useDemoModal();

  return (
    <section className="bento" id="bento">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">La puissance opérationnelle</span>
          <h2>Du premier appel à la signature, sans rupture.</h2>
          <p className="lead">
            Quatre piliers techniques pour qualifier, vérifier, signer et reporter — sans jamais relancer
            manuellement.
          </p>
        </div>

        <div className="bento-grid">
          {/* A : Large — Qualification Intelligente */}
          <div className="bento-card bento-a reveal">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Qualification intelligente.</h3>
            <p>
              Ciblez les zones éligibles et calculez les aides (CEE, MaPrimeRénov&apos;, écoPTZ) en temps réel
              dès le premier appel. Plus de rejets après commande.
            </p>

            <div className="map-mock" aria-hidden="true">
              <svg viewBox="0 0 280 160" className="map-svg">
                <defs>
                  <radialGradient id="hot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(10, 147, 150, 0.6)" />
                    <stop offset="100%" stopColor="rgba(10, 147, 150, 0)" />
                  </radialGradient>
                  <radialGradient id="warm" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 95, 115, 0.5)" />
                    <stop offset="100%" stopColor="rgba(0, 95, 115, 0)" />
                  </radialGradient>
                </defs>
                <path d="M70,30 L160,25 L210,40 L240,80 L230,120 L180,140 L120,135 L80,110 L60,80 Z" fill="var(--bg-soft)" stroke="var(--border)" strokeWidth="1" />
                <circle cx="120" cy="65" r="35" fill="url(#hot)" />
                <circle cx="180" cy="90" r="40" fill="url(#warm)" />
                <circle cx="100" cy="105" r="28" fill="url(#hot)" />
                <circle cx="200" cy="55" r="22" fill="url(#warm)" />
                <circle cx="120" cy="65" r="4" fill="var(--emerald)" />
                <circle cx="180" cy="90" r="4" fill="var(--accent)" />
                <circle cx="100" cy="105" r="4" fill="var(--emerald)" />
                <circle cx="200" cy="55" r="4" fill="var(--accent)" />
                <circle cx="155" cy="115" r="4" fill="var(--emerald)" />
              </svg>
              <div className="map-stats">
                <div className="map-stat">
                  <strong>2 414</strong>
                  <span>foyers éligibles</span>
                </div>
                <div className="map-stat">
                  <strong>+ 6 200 €</strong>
                  <span>aide moyenne</span>
                </div>
              </div>
            </div>

            <div className="bento-trust" aria-label="Garanties">
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Calcul en temps réel
              </span>
              <span className="bento-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                CEE + MaPrimeRénov&apos;
              </span>
            </div>
          </div>

          {/* B : Medium — Conformité IA Documents */}
          <div className="bento-card bento-b reveal delay-1">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <h3>Conformité IA des documents.</h3>
            <p>
              Avis d&apos;imposition, CNI, justificatif de domicile : l&apos;IA scanne, extrait, valide. Plus de
              dossier rejeté pour pièce manquante.
            </p>

            <div className="conformity-mock" aria-hidden="true">
              <div className="conformity-doc">
                <div className="conformity-doc-head">
                  <span className="conformity-doc-stamp">AVIS D&apos;IMPOSITION 2025</span>
                </div>
                <div className="conformity-line"></div>
                <div className="conformity-line conformity-line--short"></div>
                <div className="conformity-line conformity-line--rfr">
                  <span className="conformity-line-label">RFR :</span>
                  <span className="conformity-line-value">28 410 €</span>
                </div>
                <div className="conformity-line conformity-line--med"></div>
              </div>
              <div className="conformity-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Éligibilité confirmée par IA
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

          {/* C : Small — Signature Terrain */}
          <div className="bento-card bento-c reveal delay-2">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3>Signature terrain.</h3>
            <p>Zéro papier. Devis et AFT signés légalement sur le lieu de pose, en 12 secondes.</p>

            <div className="sign-mock" aria-hidden="true">
              <div className="sign-phone">
                <div className="sign-phone-head">
                  <span className="sign-phone-title">Devis · PAC Air-Eau</span>
                </div>
                <svg viewBox="0 0 200 50" className="sign-stroke" preserveAspectRatio="none">
                  <path
                    d="M10,35 Q25,15 40,30 T70,28 Q90,38 110,22 T150,32 Q170,20 190,30"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="sign-phone-foot">
                  <span className="sign-phone-eidas">✓ eIDAS · 14:28:42</span>
                </div>
              </div>
            </div>

            <div className="bento-accroche">Conforme. Opposable. Instantané.</div>
          </div>

          {/* D : Small — Reporting Mobile */}
          <div className="bento-card bento-d reveal delay-3">
            <div className="bento-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <h3>Reporting mobile.</h3>
            <p>Photos avant/après horodatées. Vos poseurs deviennent vos meilleurs administratifs.</p>

            <div className="report-gallery" aria-hidden="true">
              <div className="report-photo report-photo--before">
                <span className="report-photo-tag">Avant</span>
              </div>
              <div className="report-photo report-photo--after">
                <span className="report-photo-tag">Après</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
