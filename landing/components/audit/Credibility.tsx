const BADGES = ['RGE', 'COFRAC', 'MAR'];

export default function Credibility() {
  return (
    <section className="authority-band" aria-label="Bandeau d'autorité">
      <div className="container authority-band-inner">
        <span className="authority-band-intro">
          Déjà plus de 50 000 audits terrain sécurisés en France par nos utilisateurs :
        </span>
        <div className="authority-band-logos" role="list">
          {BADGES.map((label) => (
            <span key={label} className="authority-logo" role="listitem">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
