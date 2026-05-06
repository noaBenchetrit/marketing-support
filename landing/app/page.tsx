import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-container">
          <p className="home-eyebrow">beTool</p>
          <h1 className="home-title">
            Une suite logicielle.
            <br />
            <span className="home-title-accent">Trois métiers.</span>
          </h1>
          <p className="home-lede">
            Gérez vos dossiers, automatisez vos preuves et accélérez vos
            encaissements. Choisissez le module qui correspond à votre activité.
          </p>
        </div>
      </section>

      <section className="home-cards">
        <div className="home-container">
          <div className="home-grid">
            <Link href="/formation" className="home-card home-card--formation">
              <span className="home-card-tag">Organismes de formation</span>
              <h2 className="home-card-title">beTool Formation</h2>
              <p className="home-card-desc">
                Le CRM des centres CPF. Émargement, catalogue, planning, BPF —
                tout au même endroit. Le Bouclier IA sécurise vos dossiers
                avant l'audit Qualiopi.
              </p>
              <span className="home-card-cta">Découvrir →</span>
            </Link>

            <Link href="/audit" className="home-card home-card--audit">
              <span className="home-card-tag">Bureaux d'audit énergétique</span>
              <h2 className="home-card-title">beTool Audit</h2>
              <p className="home-card-desc">
                Sécurisez vos missions de la collecte à la signature.
                Centralisez vos preuves, automatisez vos rapports et laissez
                l'IA booster votre vigilance CEE.
              </p>
              <span className="home-card-cta">Découvrir →</span>
            </Link>

            <Link href="/installation" className="home-card home-card--installation">
              <span className="home-card-tag">Installateurs RGE</span>
              <h2 className="home-card-title">beTool Install</h2>
              <p className="home-card-desc">
                Pilotez vos chantiers de la qualification à la prime. Éliminez
                les erreurs de conformité et accélérez vos encaissements
                de 40%.
              </p>
              <span className="home-card-cta">Découvrir →</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-container">
          <p>© {new Date().getFullYear()} beTool. Tous droits réservés.</p>
          <nav className="home-footer-nav">
            <Link href="/cgu">CGU</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
