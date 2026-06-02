const PILLARS = [
  {
    icon: '📉',
    title: 'Réduction des coûts',
    text: "Absorbez vos pics d'activité sans recruter. Vos agents IA travaillent en continu, sans salaire ni charges.",
    metric: 'Jusqu’à -40 % de charges opérationnelles.',
  },
  {
    icon: '⚙️',
    title: 'Automatisation',
    text: "Déléguez la saisie, les relances et la facturation. L'IA exécute, vous gardez un contrôle absolu.",
    metric: 'Vos processus 100% automatisés.',
  },
  {
    icon: '🚀',
    title: 'Productivité',
    text: 'Libérez vos équipes des tâches ingrates. Elles se concentrent enfin sur la relation client et la croissance.',
    metric: "L'efficacité de vos talents décuplée.",
  },
] as const;

export default function Pillars() {
  return (
    <section className="ia-pillars" id="benefices">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Pourquoi beTool IA</span>
          <h2 className="reveal delay-1">
            Trois leviers, un seul objectif : <span className="accent-text">vous faire gagner</span>.
          </h2>
        </div>

        <div className="ia-pillar-grid">
          {PILLARS.map((p, i) => (
            <article className={`ia-pillar reveal delay-${i + 1}`} key={p.title}>
              <div className="ia-pillar-icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="ia-pillar-metric">{p.metric}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
