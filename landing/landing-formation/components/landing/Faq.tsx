const FAQ_ITEMS = [
  {
    q: 'Comment se passe la migration de mes données ?',
    a: (
      <>
        Nous reprenons votre catalogue, vos sessions et votre base stagiaires sans coupure. Import depuis Excel,
        Sage, Digiforma ou EDOF — l&apos;équipe betool s&apos;occupe du transfert pendant votre onboarding (entre 3
        et 7 jours en général).
      </>
    ),
  },
  {
    q: 'Quelle est la valeur légale de la signature électronique ?',
    a: (
      <>
        Notre signature s&apos;appuie sur <strong>Certigna</strong>, autorité de certification qualifiée par
        l&apos;ANSSI. Chaque signature porte un certificat et un horodatage qualifiés — opposable juridiquement et
        conforme aux exigences Qualiopi pour vos émargements.
      </>
    ),
  },
  {
    q: 'Et si la réglementation CPF change ?',
    a: (
      <>
        Notre veille réglementaire met le CRM à jour automatiquement à chaque évolution (décret CPF, mise à jour
        EDOF, nouvelle version Qualiopi). Aucune intervention de votre part — vos workflows restent conformes en
        continu.
      </>
    ),
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: (
      <>
        Sans engagement. Vous pouvez exporter l&apos;intégralité de vos données à tout moment au format ouvert.
        Notre métier est de vous garder par la qualité du produit — pas par contrainte contractuelle.
      </>
    ),
  },
  {
    q: 'Combien de temps pour être opérationnel ?',
    a: (
      <>
        Un onboarding standard prend 3 à 7 jours. Lors de la démo, nous configurons ensemble votre premier flux
        automatisé — vous repartez avec un environnement fonctionnel sur vos vraies données.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Vos questions</span>
          <h2>Avant de commencer.</h2>
          <p className="lead">Les réponses claires aux dernières barrières.</p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <details key={item.q} className={`faq-item reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''}`}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
