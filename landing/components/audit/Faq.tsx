const FAQ_ITEMS = [
  {
    q: "Comment garantissez-vous l'impartialité de l'audit ?",
    a: (
      <>
        Notre IA applique strictement les barèmes officiels (CNIL, URSSAF, DGFiP) sans intervention humaine sur
        les conclusions. Chaque détection est tracée et auditée par un commissaire aux comptes indépendant qui
        signe le rapport final. Vous accédez à la chaîne de raisonnement complète à tout moment.
      </>
    ),
  },
  {
    q: "Le rapport est-il opposable juridiquement ?",
    a: (
      <>
        Oui. Chaque rapport est horodaté par un tiers de confiance qualifié eIDAS, scellé en coffre-fort
        immuable et contresigné par un commissaire aux comptes inscrit au tableau de l&apos;ordre. Il vaut preuve
        devant l&apos;administration, l&apos;URSSAF, la CNIL et toute juridiction française.
      </>
    ),
  },
  {
    q: "Combien de temps dure l'intégration ?",
    a: (
      <>
        L&apos;intégration standard prend 48 à 72 heures. Nos connecteurs récupèrent automatiquement vos données
        comptables (Sage, Cegid, Pennylane), RH (Silae, PayFit) et SI. Aucun script à écrire, aucune donnée à
        ressaisir. L&apos;équipe technique vous accompagne sur l&apos;ensemble du processus.
      </>
    ),
  },
  {
    q: "Mes données sont-elles vraiment protégées ?",
    a: (
      <>
        Chiffrement AES-256 de bout en bout, hébergement OVHcloud sur le sol français exclusivement, clés de
        chiffrement en HSM dédié. Aucune donnée ne quitte l&apos;Union Européenne. Notre DPO est joignable
        directement et nous sommes audités tous les trimestres par un cabinet indépendant.
      </>
    ),
  },
  {
    q: "Qu'est-ce qui se passe en cas de contrôle réel ?",
    a: (
      <>
        Notre équipe juridique vous accompagne en première ligne. Vous bénéficiez d&apos;un accès direct à votre
        coffre-fort de preuves horodatées et au rapport opposable. Dans 100&nbsp;% des cas observés en 2025, la
        documentation beTool a permis de clore le contrôle sans pénalité.
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
          <h2>Anti-friction.</h2>
          <p className="lead">Les réponses aux objections les plus fréquentes des directions sous contrôle.</p>
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
