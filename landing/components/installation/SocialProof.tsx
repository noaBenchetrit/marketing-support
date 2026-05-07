const FEDERATIONS = ['CAPEB', 'FFB', 'Qualibat', 'RGE', "Qualit'EnR"];

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Adoption">
      <div className="container">
        <div className="social-proof-card reveal">
          <div className="social-proof-stat">
            <span className="social-proof-num">+500</span>
            <span className="social-proof-lbl">
              entreprises du bâtiment nous font confiance
            </span>
          </div>

          <div className="social-proof-divider" aria-hidden="true" />

          <div className="social-proof-logos" aria-label="Fédérations et certifications partenaires">
            {FEDERATIONS.map((f) => (
              <span key={f} className="social-proof-logo">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
