'use client';

import { useState } from 'react';

export default function AiComplianceCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`ai-compliance${open ? ' is-open' : ''}`}>
      <div className="ai-compliance-head">
        <div className="ai-compliance-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l2.39 4.84 5.33.77-3.86 3.76.91 5.31L12 14.18 7.23 16.68l.91-5.31-3.86-3.76 5.33-.77z" />
          </svg>
        </div>
        <div className="ai-compliance-title">
          <span className="ai-compliance-eyebrow">Bonus</span>
          <strong>Assistant IA conformité</strong>
        </div>
        <button
          type="button"
          className="ai-compliance-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'Masquer' : 'Lancer l’analyse'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d={open ? 'M18 15l-6-6-6 6' : 'M5 12h14M13 5l7 7-7 7'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="ai-compliance-body">
          <div className="ai-compliance-scan" aria-hidden="true">
            <span className="ai-scan-line" />
            <span className="ai-scan-dot blue" />
            <span className="ai-scan-dot orange" />
            <span className="ai-scan-dot green" />
          </div>
          <p>
            Notre IA scanne la cohérence de vos dossiers de chantiers (devis, situations de travaux,
            attestations de vigilance) et bloque les erreurs avant l’envoi au client ou au maître
            d’ouvrage. Moins de litiges, des chantiers payés plus vite.
          </p>
        </div>
      )}
    </div>
  );
}
