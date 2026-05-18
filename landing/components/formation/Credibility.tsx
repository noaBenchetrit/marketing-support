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

export default function Credibility() {
  // Double la liste pour un défilement seamless
  const marquee = [...TESTIMONIALS, ...TESTIMONIALS];

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

        <div className="testimonial-marquee reveal delay-2" aria-label="Avis clients">
          <div className="testimonial-track">
            {marquee.map((t, i) => (
              <article className="testimonial-pill" key={`${t.author}-${i}`} aria-hidden={i >= TESTIMONIALS.length}>
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
