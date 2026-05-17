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
            <h3>Avec beTool <span style={{ color: 'var(--accent-deep)' }}>(La Sérénité)</span></h3>
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
