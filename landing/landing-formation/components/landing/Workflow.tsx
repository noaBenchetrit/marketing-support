const STEPS = [
  { num: 1, title: 'Connectez', text: 'Importez vos formations et vos stagiaires en quelques secondes.' },
  { num: 2, title: 'Automatisez', text: 'Le CRM pilote les conventions, les émargements et les relances.' },
  {
    num: 3,
    title: 'Encaissez',
    text: 'Vos dossiers sont parfaits, votre financement est sécurisé. Vous respirez.',
  },
];

export default function Workflow() {
  return (
    <section className="workflow">
      <div className="container">
        <div className="workflow-head reveal">
          <span className="eyebrow">Le flux</span>
          <h2>
            De <strong>3 heures</strong> à <strong>3 minutes</strong>.
          </h2>
          <p className="lead">Trois étapes. Aucune friction.</p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`step reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
