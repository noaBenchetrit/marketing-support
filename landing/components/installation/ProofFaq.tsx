const FAQ_ITEMS = [
  {
    q: 'Qu’est-ce que vous entendez par « source unique de vérité » ?',
    a: (
      <>
        Cela signifie que vos fiches clients, vos plannings, vos devis et vos factures sont connectés
        entre eux au même endroit. Modifiez une info sur le chantier, elle est mise à jour
        instantanément au bureau.
      </>
    ),
  },
  {
    q: 'Est-ce que le calcul MaPrimeRénov’ / CEE est mis à jour ?',
    a: (
      <>
        Oui, les barèmes des aides de l’État sont intégrés et actualisés automatiquement dans l’outil
        pour éviter toute erreur de calcul.
      </>
    ),
  },
  {
    q: 'Puis-je importer mes données existantes ?',
    a: (
      <>
        Tout à fait. Notre équipe prend en charge gratuitement l’importation de vos fichiers clients
        pour que vous soyez opérationnel dès le premier jour.
      </>
    ),
  },
];

export default function ProofFaq() {
  return (
    <section className="proof-faq" id="proof">
      <div className="container">
        <div className="proof-faq-grid">
          <figure className="proof-quote reveal reveal-left">
            <span className="proof-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Avant Betool, mes infos étaient partout : sur des carnets, dans mes mails, sur Excel.
              C’était le chaos. Aujourd’hui, tout est centralisé au même endroit. Mes plannings sont
              carrés, mes gars savent quoi faire, et j’ai même intégré les aides MaPrimeRénov’ sur
              mes devis sans me prendre la tête.
            </blockquote>
            <figcaption className="proof-author">
              <div className="proof-avatar" aria-hidden="true">YM</div>
              <div>
                <strong>Yannick M.</strong>
                <span>Gérant de YM Rénovation · 4 salariés</span>
              </div>
            </figcaption>
          </figure>

          <div className="proof-faq-list reveal reveal-right delay-1">
            <span className="eyebrow">Vos questions, nos réponses</span>
            {FAQ_ITEMS.map((item, i) => (
              <details key={item.q} className={`proof-faq-item reveal delay-${i + 2}`}>
                <summary>
                  <span>{item.q}</span>
                  <span className="proof-faq-chevron" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
