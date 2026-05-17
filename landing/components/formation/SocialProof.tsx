const FAQ = [
  {
    q: 'Les signatures sont-elles acceptées par les OPCO et la CDC ?',
    a: 'Absolument. Nos émargements respectent le niveau de sécurité eIDAS, requis et validé par tous les financeurs publics et paritaires (OPCO, Caisse des Dépôts).',
  },
  {
    q: 'Est-ce que mes formateurs externes auront un accès ?',
    a: 'Oui. Vous pouvez leur créer des accès restreints et sécurisés en 2 clics pour qu’ils gèrent uniquement leurs plannings et leurs émargements, sans voir vos données financières.',
  },
  {
    q: 'Combien de temps prend la mise en place ?',
    a: '15 minutes pour activer votre compte, 5 jours ouvrés pour la migration intégrale et gratuite de vos données existantes par notre équipe.',
  },
  {
    q: 'L’IA peut-elle vraiment empêcher les rejets financeurs ?',
    a: 'Oui. L’IA scanne dates, CNI, contrats et cohérence des dossiers avant envoi. Elle bloque les erreurs détectables (chiffres, pièces manquantes, incohérences) qui sont à l’origine de 90 % des rejets OPCO/CDC.',
  },
];

export default function SocialProof() {
  return (
    <section className="social-section" id="temoignages">
      <div className="container">
        <div className="faq-only">
          <p className="social-col-title">Questions fréquentes</p>
          <div className="faq-list">
            {FAQ.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-summary">
                  <span>{item.q}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
