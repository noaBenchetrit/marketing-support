type Tone = 'green' | 'blue' | 'amber' | 'violet';
type Testimonial = {
  quote: string;
  author: string;
  role: string;
  badge: string;
  tone: Tone;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Avant beTool, on perdait deux jours par mois. Aujourd’hui, on absorbe 200 stagiaires sans recruter.',
    author: 'Camille L.',
    role: 'Directrice · Académie Pro',
    badge: '+200 stagiaires gérés',
    tone: 'green',
  },
  {
    quote:
      'L’audit Qualiopi a duré 4h au lieu d’une journée. L’auditeur n’a posé aucune question sur la conformité.',
    author: 'Julien M.',
    role: 'Gérant · FormaPlus',
    badge: 'Zéro non-conformité',
    tone: 'blue',
  },
  {
    quote:
      'Les émargements eIDAS, c’est la fin du papier perdu. Le pack de preuves se génère tout seul.',
    author: 'Sophie B.',
    role: 'Responsable pédagogique',
    badge: 'Zéro papier',
    tone: 'green',
  },
  {
    quote:
      'On a divisé par 3 le temps passé sur les dossiers EDOF. Notre trésorerie respire enfin.',
    author: 'Karim H.',
    role: 'Directeur · CFA Métiers',
    badge: '−66 % de gestion',
    tone: 'violet',
  },
  {
    quote:
      'Les rejets OPCO étaient notre cauchemar. Avec l’automatisation beTool, plus une erreur de saisie en 6 mois.',
    author: 'Léa F.',
    role: 'DAF de centre',
    badge: '0 rejet financeur',
    tone: 'amber',
  },
  {
    quote:
      'On est passés de 50 à 350 stagiaires par an. beTool a scalé avec nous sans recruter une personne.',
    author: 'Antoine M.',
    role: 'Fondateur OF',
    badge: '×7 stagiaires',
    tone: 'blue',
  },
];

export default function Testimonials() {
  const marquee = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="testimonials-section" aria-label="Avis clients">
      <div className="container">
        <div className="testimonial-marquee reveal" aria-label="Avis clients">
          <div className="testimonial-track">
            {marquee.map((t, i) => (
              <article
                className="testimonial-pill"
                key={`${t.author}-${i}`}
                aria-hidden={i >= TESTIMONIALS.length}
              >
                <p className="testimonial-pill-quote">{t.quote}</p>
                <div className="testimonial-pill-meta">
                  <span className="testimonial-pill-author">
                    <strong>{t.author}</strong> · {t.role}
                  </span>
                  <span className={`testimonial-pill-badge tone-${t.tone}`}>{t.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
