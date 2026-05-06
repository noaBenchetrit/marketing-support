const FAQ_ITEMS = [
  {
    q: 'Est-ce difficile de transférer mes dossiers actuels ?',
    a: (
      <>
        Non, notre équipe vous accompagne pour importer vos données existantes. Vous êtes opérationnel en
        moins d&apos;une semaine.
      </>
    ),
  },
  {
    q: 'Les signatures sont-elles acceptées par les OPCO et la CDC ?',
    a: (
      <>
        Absolument. Nos signatures respectent les normes les plus strictes exigées par les financeurs.
      </>
    ),
  },
  {
    q: 'Puis-je gérer mes formateurs externes ?',
    a: <>Oui, beTool permet de créer des accès limités pour vos prestataires.</>,
  },
];

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Désamorçons les freins</span>
          <h2>Vos questions, nos réponses.</h2>
          <p className="lead">Les 3 réponses qui lèvent les dernières barrières.</p>
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
