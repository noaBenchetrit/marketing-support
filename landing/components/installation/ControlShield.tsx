export default function ControlShield() {
  return (
    <section className="control-shield" aria-label="Bouclier juridique et contrôle">
      <div className="container">
        <div className="control-shield-card reveal">
          <div className="control-shield-icon" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" strokeWidth="2.2" />
            </svg>
          </div>
          <div className="control-shield-text">
            <span className="eyebrow">Bouclier juridique &amp; contrôle</span>
            <h3>Soyez prêt pour n&apos;importe quel contrôle.</h3>
            <p>
              Anah, SGS, Veritas, bureaux de contrôle indépendants : votre dossier est complet, scellé,
              horodaté et opposable. Préparez-vous une fois, soyez serein à vie.
            </p>
          </div>
          <div className="control-shield-stamps" aria-hidden="true">
            <span className="control-shield-stamp">Anah</span>
            <span className="control-shield-stamp">SGS</span>
            <span className="control-shield-stamp">Veritas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
