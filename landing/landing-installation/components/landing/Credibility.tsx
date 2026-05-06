const ITEMS = [
  "Compatible MaPrimeRénov'",
  'Certifié signature électronique eIDAS',
  '+10 000 installations sécurisées',
  'Archivage décennal inclus',
];

export default function Credibility() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="credibility">
      <div className="trust-marquee reveal" aria-label="Garanties">
        <div className="trust-track">
          {loop.map((item, i) => (
            <span key={i} className="trust-item" aria-hidden={i >= ITEMS.length}>
              <span className="trust-dot" aria-hidden="true"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
