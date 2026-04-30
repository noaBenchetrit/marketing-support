const FAQ_ITEMS = [
  {
    q: 'Comment se passe la migration de mes dossiers existants ?',
    a: (
      <>
        Nous reprenons votre catalogue de bénéficiaires, vos dossiers en cours et vos pièces justificatives sans
        coupure. Import depuis Excel, GED ou base existante — l&apos;équipe betool s&apos;occupe du transfert pendant
        votre onboarding (entre 3 et 7 jours en général).
      </>
    ),
  },
  {
    q: 'Quelle est la valeur légale des attestations CEE générées ?',
    a: (
      <>
        Les attestations sur l&apos;honneur s&apos;appuient sur <strong>Certigna</strong>, autorité de certification
        qualifiée par l&apos;ANSSI. Chaque signature porte un certificat et un horodatage qualifiés — opposable
        juridiquement et conforme aux exigences PNCEE pour vos dépôts.
      </>
    ),
  },
  {
    q: 'Et si une fiche d\'opération CEE change ?',
    a: (
      <>
        Notre veille réglementaire met le CRM à jour automatiquement à chaque évolution (nouvelle version d&apos;une
        fiche BAR-TH ou IND-UT, mise à jour des coefficients, V6 du dispositif). Aucune intervention de votre part —
        vos calculs cumac restent à jour en continu.
      </>
    ),
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: (
      <>
        Sans engagement. Vous pouvez exporter l&apos;intégralité de vos dossiers à tout moment au format ouvert.
        Notre métier est de vous garder par la qualité du produit — pas par contrainte contractuelle.
      </>
    ),
  },
  {
    q: 'Combien de temps pour être opérationnel ?',
    a: (
      <>
        Un onboarding standard prend 3 à 7 jours. Lors de la démo, nous configurons ensemble votre première fiche
        d&apos;opération automatisée — vous repartez avec un environnement fonctionnel sur vos vraies données.
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
