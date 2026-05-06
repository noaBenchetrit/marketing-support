type CredItem = {
  name: string;
  src: string;
};

const ITEMS: CredItem[] = [
  { name: 'MonCompteFormation', src: '/monCompteFormation.png' },
  { name: 'Qualiopi', src: '/qualiopi.png' },
  { name: 'Certigna', src: '/certigna.png' },
  { name: 'Caisse des Dépôts', src: '/caisseDesDepots.png' },
];

export default function Credibility() {
  return (
    <section className="credibility">
      <div className="container">
        <div className="cred-label reveal">Compatible avec</div>
        <div className="cred-row reveal delay-1">
          {ITEMS.map((item, i) => (
            <span key={item.name} className="cred-item-wrap">
              <span className="cred-item cred-item--image">
                <img className="cred-logo" src={item.src} alt={item.name} loading="lazy" />
              </span>
              {i < ITEMS.length - 1 && <span className="cred-sep" aria-hidden="true"></span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
