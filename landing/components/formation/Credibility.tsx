const BAD = [
  'Courir après les signatures des stagiaires et des formateurs en fin de mois.',
  "La boule au ventre permanente à l'idée du prochain audit Qualiopi.",
  'Saisir 4 fois les mêmes données sur Excel, EDOF et votre logiciel interne.',
];

const GOOD = [
  'Émargement numérique eIDAS validé en 30 secondes sur smartphone.',
  'Pack de preuves généré en 1 clic : zéro stress, audit-ready en permanence.',
  'Une seule source de vérité. Vos outils se parlent, tout est synchronisé.',
];

export default function Credibility() {
  return (
    <section className="pain-section" id="pain">
      <div className="container">
        <div className="pain-header reveal">
          <h2>Le coût caché de l&apos;inaction : de la survie administrative à la croissance.</h2>
        </div>

        <div className="pain-grid">
          <div className="pain-card pain-card-bad reveal">
            <h3>Sans beTool <span className="muted">(L&apos;enfer des fichiers)</span></h3>
            <ul className="pain-list">
              {BAD.map((line) => (
                <li key={line}>
                  <span className="pain-icon" aria-hidden="true">✕</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pain-card pain-card-good reveal delay-1">
            <div className="pain-card-head">
              <h3>Avec beTool <span style={{ color: 'var(--accent-deep)' }}>(La Sérénité)</span></h3>
              <a href="#final-form" className="btn btn-violet btn-compact pain-card-cta">
                Être recontacté
                <svg
                  className="arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <ul className="pain-list">
              {GOOD.map((line) => (
                <li key={line}>
                  <span className="pain-icon" aria-hidden="true">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
