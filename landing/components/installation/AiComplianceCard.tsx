export default function AiComplianceCard() {
  return (
    <article className="pillar-card reveal reveal-right delay-2">
      <div className="pillar-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.39 4.84 5.33.77-3.86 3.76.91 5.31L12 14.18 7.23 16.68l.91-5.31-3.86-3.76 5.33-.77z" />
        </svg>
      </div>
      <h3>Assistant IA conformité</h3>
      <p className="pillar-solution">
        Notre IA scanne la cohérence de vos dossiers de chantiers (devis, situations de travaux,
        attestations de vigilance) et bloque les erreurs avant l’envoi au client ou au maître
        d’ouvrage. Moins de litiges, des chantiers payés plus vite.
      </p>
    </article>
  );
}
