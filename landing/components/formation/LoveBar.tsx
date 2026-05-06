const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LOGOS = [
  { name: 'MonCompteFormation', src: '/monCompteFormation.png' },
  { name: 'Qualiopi', src: '/qualiopi.png' },
  { name: 'Certigna', src: '/certigna.png' },
  { name: 'Caisse des Dépôts', src: '/caisseDesDepots.png' },
];

export default function LoveBar() {
  return (
    <section className="love-bar">
      <div className="container">
        <div className="love-row reveal">
          <div className="love-text-block">
            <strong>+150 centres de formation pilotent leur croissance avec beTool.</strong>
          </div>

          <div className="love-sep"></div>

          <div className="love-clients">
            <div className="love-logos">
              {LOGOS.map((l) => (
                <img key={l.name} className="love-logo" src={l.src} alt={l.name} loading="lazy" />
              ))}
            </div>
          </div>

          <div className="love-sep"></div>

          <div className="love-rating">
            <div className="love-stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="love-text">
              <strong>4.9/5</strong>
              <small>sur Google Reviews</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
