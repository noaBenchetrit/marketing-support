const Star = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function LoveBar() {
  return (
    <section className="love-bar">
      <div className="container">
        <div className="love-row reveal">
          <div className="love-rating">
            <div className="love-stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="love-text">
              <strong>Excellent · 4.9/5</strong>
              <small>Sur Google Reviews · 120+ avis vérifiés</small>
            </div>
          </div>

          <div className="love-sep"></div>

          <div className="love-clients">
            <span className="love-label">Adopté par</span>
            <div className="client-logos">
              <span className="client-logo">Académie Pro</span>
              <span className="client-logo">FormaPlus</span>
              <span className="client-logo">CFC Paris</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
