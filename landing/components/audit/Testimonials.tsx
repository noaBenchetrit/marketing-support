import { TESTIMONIALS, type Testimonial } from './testimonials-data';

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="testi-card">
      <span className="testi-quote">&ldquo;</span>
      <p className="quote-text">{t.quote}</p>
      <div className="testi-author">
        <div className={`testi-avatar ${t.color}`}>{t.avatar}</div>
        <div>
          <strong>{t.name}</strong>
          <span>
            {t.role} · {t.organism}
          </span>
        </div>
      </div>
      <div className="testi-metric">
        <span className="metric-num">{t.metric.num}</span>
        <span className="metric-label">{t.metric.label}</span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplique le tableau pour boucle infinie sans saut visible
  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2>Des résultats concrets, des cabinets d&apos;audit derrière.</h2>
          <p className="lead">
            Retours d&apos;auditeurs, MAR et bureaux de contrôle qui ont basculé sur beTool. Survolez pour mettre en pause.
          </p>
        </div>
      </div>

      <div className="testi-marquee">
        <div className="testi-track">
          {cards.map((t, i) => (
            <Card key={`${t.avatar}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
