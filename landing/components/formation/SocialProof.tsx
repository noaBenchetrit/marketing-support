const TESTIMONIALS = [
  {
    quote:
      'Avant beTool, on perdait deux jours par mois. Aujourd’hui, on absorbe 200 stagiaires sans recruter.',
    author: 'Camille L.',
    role: 'Directrice Académie Pro',
    badge: '+200 stagiaires gérés',
    badgeColor: 'green' as const,
  },
  {
    quote:
      'L’audit Qualiopi a duré 4h au lieu d’une journée. L’auditeur n’a posé aucune question sur la conformité.',
    author: 'Julien M.',
    role: 'Gérant FormaPlus',
    badge: 'Zéro non-conformité',
    badgeColor: 'blue' as const,
  },
];

const FAQ = [
  {
    q: 'Les signatures sont-elles acceptées par les OPCO et la CDC ?',
    a: 'Absolument. Nos émargements respectent le niveau de sécurité eIDAS, requis et validé par tous les financeurs publics et paritaires (OPCO, Caisse des Dépôts).',
  },
  {
    q: 'Est-ce que mes formateurs externes auront un accès ?',
    a: 'Oui. Vous pouvez leur créer des accès restreints et sécurisés en 2 clics pour qu’ils gèrent uniquement leurs plannings et leurs émargements, sans voir vos données financières.',
  },
];

export default function SocialProof() {
  return (
    <section className="social-section" id="temoignages">
      <div className="container">
        <div className="social-grid">
          <div className="reveal">
            <p className="social-col-title">Ils gagnent du temps avec beTool</p>
            <div className="testimonial-list">
              {TESTIMONIALS.map((t) => (
                <article className="testimonial-card" key={t.author}>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-meta">
                    <span className="testimonial-author">
                      <strong>{t.author}</strong> · {t.role}
                    </span>
                    <span className={`testimonial-badge ${t.badgeColor}`}>{t.badge}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal delay-1">
            <p className="social-col-title">Questions fréquentes</p>
            <div className="faq-list">
              {FAQ.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary className="faq-summary">
                    <span>{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
