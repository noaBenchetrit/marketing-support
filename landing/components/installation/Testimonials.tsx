type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  city: string;
  initials: string;
};

// ⚠️ Témoignages à remplacer par de vrais avis clients validés avant mise en ligne
// (publier de faux témoignages = pratique commerciale trompeuse, DGCCRF).
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Depuis beTool, plus aucun dossier CEE rejeté. On a sécurisé 100 % de nos primes sur le dernier trimestre, sans relancer les pièces manquantes à la main.',
    name: 'Karim B.',
    role: 'Gérant',
    company: 'RénoConfort 31',
    city: 'Toulouse',
    initials: 'KB',
  },
  {
    quote:
      'La distribution automatique des leads a fait grimper notre taux de signature de 22 %. Mes commerciaux ne perdent plus une seule piste.',
    name: 'Sandrine M.',
    role: 'Directrice',
    company: 'Iso Habitat Pro',
    city: 'Lyon',
    initials: 'SM',
  },
  {
    quote:
      'Le planning de pose optimisé nous fait gagner près d’une journée par semaine sur la logistique des équipes. Les trajets sont enfin rationalisés.',
    name: 'Thomas L.',
    role: 'Cogérant',
    company: 'Énergie Bâtiment Services',
    city: 'Nantes',
    initials: 'TL',
  },
];

export default function Testimonials() {
  return (
    <section id="sec-temoignages" className="deck-section is-light">
      <span className="deck-orb orb-soft orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-head reveal" style={{ maxWidth: 'none', textAlign: 'center', margin: '0 auto' }}>
          <span className="eyebrow">Ils nous font confiance</span>
          <h2>
            Des installateurs RGE qui ont repris le contrôle de leur{' '}
            <span className="accent">activité</span>.
          </h2>
        </div>

        <ul className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <li key={t.company} className={`testimonial-card reveal delay-${i + 1}`}>
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span className="testimonial-meta">
                  <strong>{t.name}</strong>
                  <span>
                    {t.role} · {t.company} — {t.city}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
