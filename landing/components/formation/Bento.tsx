const SignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 17l3-3 2 2 4-5" />
  </svg>
);
const CatalogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
    <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z" />
  </svg>
);

export default function Bento() {
  return (
    <section className="bento-section" id="produit">
      <div className="container">
        <div className="bento-header reveal">
          <h2>
            Tout ce dont un OF a besoin. <span style={{ color: 'var(--brand)' }}>En plus intelligent.</span>
          </h2>
        </div>

        <div className="bento-grid">
          <div className="bento-box bento-large reveal">
            <span className="bento-box-icon"><SignIcon /></span>
            <h3>Émargement numérique certifié.</h3>
            <p>
              Signature eIDAS via Certigna avec horodatage légal. Vos sessions sont closes
              et prêtes pour les OPCO en un clic.
            </p>
          </div>

          <div className="bento-box bento-small reveal delay-1">
            <span className="bento-box-icon"><CatalogIcon /></span>
            <h3>Du catalogue au suivi du RAC.</h3>
            <p>
              Importez votre catalogue de formations et suivez le Reste à Charge (RAC) en
              temps réel pour une facturation sans erreur.
            </p>
          </div>

          <div className="bento-box bento-small reveal delay-2">
            <span className="bento-box-icon"><CalendarIcon /></span>
            <h3>Plannings et BPF automatisés.</h3>
            <p>
              Zéro doublon de formateur. Générez votre Bilan Pédagogique et Financier (BPF)
              en un clic à la fin de l&apos;année.
            </p>
          </div>

          <div className="bento-box bento-ai reveal delay-3">
            <span className="bento-box-icon"><SparkleIcon /></span>
            <h3>L&apos;assistant IA qui sécurise vos fonds.</h3>
            <p>
              Notre IA scanne la cohérence des dossiers (dates, CNI, contrats) et bloque les
              erreurs de saisie avant l&apos;envoi aux financeurs. Moins de rejets, plus de trésorerie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
