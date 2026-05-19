const BADGES = ['RGE', 'OPQIBI', 'QUALIBAT', 'CABINET ÉCO-AUDIT', 'MAR'];

export default function Credibility() {
  return (
    <section className="certifications" aria-label="Certifications partenaires">
      <div className="container">
        <p className="certif-intro reveal">
          Ils sécurisent leurs processus et la conformité de leurs rapports avec beTool :
        </p>
        <div className="certif-row reveal delay-1">
          {BADGES.map((label) => (
            <span key={label} className="certif-badge">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
