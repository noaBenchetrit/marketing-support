export default function Satisfaction() {
  return (
    <section className="satisfaction">
      <div className="container">
        <div className="sat-row">
          <div className="sat-item reveal">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <strong>14 jours d&apos;essai gratuit</strong>
              <span>Sans carte bancaire. Sans engagement.</span>
            </div>
          </div>
          <div className="sat-item reveal delay-1">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <strong>98% de clients renouvellent</strong>
              <span>Si betool ne vous convient pas, on rembourse.</span>
            </div>
          </div>
          <div className="sat-item reveal delay-2">
            <div className="sat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <strong>Opérationnel en 7 jours</strong>
              <span>Onboarding et migration inclus.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
