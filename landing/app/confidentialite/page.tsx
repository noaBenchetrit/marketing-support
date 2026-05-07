import Link from 'next/link';
import LegalToc, { type TocItem } from '@/components/legal/LegalToc';
import LegalBack from '@/components/legal/LegalBack';

export const metadata = {
  title: 'Politique de Confidentialité — beTool',
  description:
    "Politique de confidentialité de beTool : collecte, utilisation et protection des données personnelles, conformité RGPD.",
};

const TOC_ITEMS: TocItem[] = [
  { id: 'intro', label: 'Préambule' },
  { id: 'art-1', label: '1. But de la politique' },
  { id: 'art-2', label: '2. Lois applicables' },
  { id: 'art-3', label: '3. Consentement' },
  { id: 'art-4', label: '4. Données collectées' },
  { id: 'art-5', label: '5. Utilisation des données' },
  { id: 'art-6', label: '6. Données Google (Gmail)' },
  { id: 'art-7', label: '7. Partage des données' },
  { id: 'art-8', label: '8. Hébergement et sécurité' },
  { id: 'art-9', label: '9. Conservation' },
  { id: 'art-10', label: '10. Mesures de sécurité' },
  { id: 'art-11', label: '11. Mineurs' },
  { id: 'art-12', label: '12. Vos droits (RGPD)' },
  { id: 'art-13', label: '13. Modifier ou supprimer' },
  { id: 'art-14', label: '14. Cookies' },
  { id: 'art-15', label: '15. Modifications' },
  { id: 'art-16', label: '16. Contact' },
];

export default function ConfidentialitePage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <LegalBack>← Retour</LegalBack>
          <h1>Politique de Confidentialité</h1>
          <p className="legal-meta">En vigueur depuis le 01/01/2025</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <div className="legal-layout">
            <article className="legal-content">
              <section id="intro" className="legal-intro">
                <p>
                  Le but de cette politique de confidentialité est de définir les modalités de traitement des
                  données personnelles, dans le cadre d&apos;une relation commerciale de confiance, notamment
                  entre le fournisseur du site et les utilisateurs.
                </p>
                <p>Elle couvre :</p>
                <ul>
                  <li>Les données personnelles recueillies</li>
                  <li>L&apos;utilisation des données recueillies</li>
                  <li>L&apos;accès aux données recueillies</li>
                  <li>Les droits des utilisateurs du site</li>
                  <li>La politique de cookies du site</li>
                </ul>
                <p>
                  Cette politique de confidentialité fonctionne parallèlement aux conditions générales
                  d&apos;utilisation de notre site.
                </p>
              </section>

              <section id="art-1">
                <h2>1. But de la politique</h2>
                <p>
                  Définir les modalités de traitement des données personnelles dans le cadre de la relation
                  commerciale entre beTool et ses utilisateurs : collecte, utilisation, conservation, accès, droits
                  des utilisateurs et politique de cookies.
                </p>
              </section>

              <section id="art-2">
                <h2>2. Lois applicables</h2>
                <p>
                  Conformément au Règlement général sur la protection des données (RGPD), cette politique de
                  confidentialité est conforme aux lois et règlements suivants :
                </p>
                <ul>
                  <li>Règlement (UE) 2016/679 du Parlement Européen du 27 avril 2016</li>
                  <li>Loi 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés</li>
                  <li>Loi 2018-493 du 2 juin 2018 relative à la protection des données personnelles</li>
                </ul>
                <p>Les données à caractère personnel doivent être :</p>
                <ul>
                  <li>traitées de manière licite, loyale et transparente au regard de la personne concernée ;</li>
                  <li>collectées pour des finalités déterminées, explicites et légitimes ;</li>
                  <li>adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités ;</li>
                  <li>exactes et, si nécessaire, tenues à jour ;</li>
                  <li>
                    conservées sous une forme permettant l&apos;identification des personnes concernées pendant
                    une durée n&apos;excédant pas celle nécessaire ;
                  </li>
                  <li>traitées de façon à garantir une sécurité appropriée des données à caractère personnel.</li>
                </ul>
              </section>

              <section id="art-3">
                <h2>3. Consentement</h2>
                <p>Les utilisateurs conviennent qu&apos;en utilisant notre site, ils consentent :</p>
                <ul>
                  <li>aux conditions énoncées dans la présente politique de confidentialité, et</li>
                  <li>
                    à la collecte, l&apos;utilisation et la conservation des données énumérées dans la présente
                    politique.
                  </li>
                </ul>
              </section>

              <section id="art-4">
                <h2>4. Données personnelles que nous collectons</h2>
                <h3>Données collectées automatiquement</h3>
                <p>
                  Lorsque vous visitez et utilisez notre site, nous pouvons automatiquement recueillir et
                  conserver les renseignements suivants :
                </p>
                <ul>
                  <li>Adresse IP</li>
                  <li>Lieu</li>
                  <li>Détails matériels et logiciels</li>
                  <li>Liens et contenu consulté</li>
                  <li>Historique de navigation</li>
                </ul>
                <h3>Données recueillies de façon non automatique</h3>
                <p>
                  Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines actions
                  sur notre site :
                </p>
                <ul>
                  <li>Prénom et nom</li>
                  <li>Email professionnel</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations de paiement (via prestataire sécurisé)</li>
                  <li>Données CRM importées par l&apos;utilisateur</li>
                </ul>
                <p>Ces données sont recueillies lors de l&apos;inscription et de l&apos;utilisation des services.</p>
                <p>
                  Nous ne collectons que les données qui nous aident à atteindre l&apos;objectif énoncé dans cette
                  politique de confidentialité.
                </p>
              </section>

              <section id="art-5">
                <h2>5. Comment nous utilisons les données personnelles</h2>
                <p>
                  Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins
                  précisées dans la présente politique. Les données sont utilisées pour :
                </p>
                <ul>
                  <li>Améliorer l&apos;expérience utilisateur</li>
                  <li>Fournir le service CRM et l&apos;automatisation</li>
                  <li>Tenir un registre des accès (logs de sécurité)</li>
                  <li>Certifier les signatures électroniques</li>
                </ul>
              </section>

              <section id="art-6">
                <h2>6. Utilisation des données Google Workspace (Gmail)</h2>
                <p>
                  Dans le cadre de ses fonctionnalités de CRM et d&apos;automatisation, beTool offre la
                  possibilité de connecter un compte Google (Gmail). Conformément aux exigences de Google, nous
                  appliquons une politique de transparence stricte :
                </p>
                <h3>Accès et utilisation</h3>
                <p>
                  Notre application se connecte au compte Gmail de l&apos;utilisateur uniquement pour synchroniser
                  les emails entrants et sortants liés aux contacts et opportunités du CRM. Ces emails servent à
                  l&apos;affichage et le suivi des échanges, et ne sont pas utilisés à d&apos;autres fins
                  (publicité, revente, etc.).
                </p>
                <h3>Conformité &laquo; Limited Use &raquo;</h3>
                <p>
                  L&apos;utilisation par beTool et le transfert vers toute autre application des informations
                  reçues des API Google respecteront la Politique de données utilisateur des services API Google,
                  y compris les exigences d&apos;utilisation limitée (Limited Use requirements).
                </p>
                <h3>Contrôle utilisateur</h3>
                <p>
                  L&apos;usage des données Google est limité aux fonctions décrites. Les utilisateurs peuvent à
                  tout moment révoquer l&apos;accès de beTool à leur compte Google.
                </p>
                <p>
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir la politique de données utilisateur des services API Google →
                  </a>
                </p>
              </section>

              <section id="art-7">
                <h2>7. Partage des données</h2>
                <h3>Employés</h3>
                <p>
                  Nous pouvons divulguer à tout membre de notre organisation les données utilisateur dont il a
                  raisonnablement besoin pour réaliser les objectifs énoncés dans la présente politique.
                </p>
                <h3>Sous-traitants et tiers</h3>
                <p>
                  Les tiers (hébergeurs, solutions de paiement) n&apos;ont accès qu&apos;aux données nécessaires
                  pour effectuer leurs tâches.
                </p>
                <h3>Autres divulgations légales</h3>
                <ul>
                  <li>si la loi l&apos;exige</li>
                  <li>pour toute procédure judiciaire</li>
                  <li>pour prouver ou protéger nos droits légaux</li>
                  <li>aux acquéreurs potentiels de la société en cas de vente</li>
                </ul>
                <p>
                  <strong>Liens vers d&apos;autres sites :</strong> nous ne sommes pas responsables de leurs
                  politiques de confidentialité.
                </p>
              </section>

              <section id="art-8">
                <h2>8. Hébergement et sécurité</h2>
                <p>
                  Les données de beTool sont hébergées exclusivement en France (Union Européenne) sur les serveurs
                  sécurisés de notre prestataire OVHcloud. Cet hébergement garantit la souveraineté de vos données
                  et une conformité totale avec le RGPD.
                </p>
              </section>

              <section id="art-9">
                <h2>9. Conservation des données</h2>
                <p>
                  Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour
                  atteindre les fins pour lesquelles elles sont recueillies.
                </p>
              </section>

              <section id="art-10">
                <h2>10. Mesures de sécurité</h2>
                <ul>
                  <li>Utilisation du protocole TLS/SSL pour tous les transferts de données.</li>
                  <li>Accès restreint aux employés liés par des accords de confidentialité stricts.</li>
                  <li>Sauvegardes régulières et protection contre les pertes de données.</li>
                </ul>
              </section>

              <section id="art-11">
                <h2>11. Mineurs</h2>
                <p>
                  Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins
                  de la collecte de données. Les mineurs doivent avoir le consentement d&apos;un représentant légal
                  pour que leurs données soient recueillies.
                </p>
              </section>

              <section id="art-12">
                <h2>12. Vos droits (RGPD)</h2>
                <p>En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes concernées :</p>
                <ul>
                  <li>Droit d&apos;accès et de rectification</li>
                  <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez notre DPO à :{' '}
                  <a href="mailto:contact@betool.fr">contact@betool.fr</a>
                </p>
              </section>

              <section id="art-13">
                <h2>13. Comment modifier, supprimer ou contester les données recueillies</h2>
                <p>
                  Si vous souhaitez que vos renseignements soient supprimés ou modifiés d&apos;une façon ou d&apos;une
                  autre, veuillez communiquer avec notre agent de protection de la vie privée :{' '}
                  <a href="mailto:contact@betool.fr">contact@betool.fr</a>
                </p>
              </section>

              <section id="art-14">
                <h2>14. Politique sur les cookies</h2>
                <p>
                  Un cookie est un petit fichier stocké sur le disque dur d&apos;un utilisateur par le site Web.
                  Son but est de recueillir des données relatives aux habitudes de navigation de l&apos;utilisateur.
                </p>
                <ul>
                  <li>
                    <strong>Cookies fonctionnels :</strong> nécessaires au fonctionnement du site (connexion,
                    session).
                  </li>
                  <li>
                    <strong>Cookies analytiques :</strong> pour mesurer l&apos;audience et améliorer nos performances.
                  </li>
                  <li>
                    <strong>Cookies tiers :</strong> pour des intégrations externes (ex&nbsp;: Google, Stripe).
                  </li>
                </ul>
                <p>
                  Vous pouvez choisir d&apos;être averti chaque fois qu&apos;un cookie est transmis. Vous pouvez
                  également choisir de désactiver les cookies dans votre navigateur, mais cela peut diminuer la
                  qualité de votre expérience d&apos;utilisation.
                </p>
                <h3>Cookies tiers</h3>
                <p>Nous pouvons utiliser des cookies tiers sur notre site pour atteindre les objectifs suivants :</p>
                <ul>
                  <li>Améliorer l&apos;expérience utilisateur</li>
                  <li>Améliorer la sécurité</li>
                  <li>Analyser les performances du site</li>
                </ul>
              </section>

              <section id="art-15">
                <h2>15. Modifications de la politique</h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à l&apos;occasion afin de maintenir la
                  conformité avec la loi et de tenir compte de tout changement dans notre processus de collecte
                  de données. Nous recommandons à nos utilisateurs de vérifier notre politique régulièrement.
                </p>
              </section>

              <section id="art-16">
                <h2>16. Contact</h2>
                <p>
                  Si vous avez des questions à nous poser, n&apos;hésitez pas à communiquer avec nous :{' '}
                  <a href="mailto:contact@betool.fr">contact@betool.fr</a>
                </p>
              </section>
            </article>

            <aside className="legal-toc-wrap">
              <LegalToc items={TOC_ITEMS} />
            </aside>
          </div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <LegalBack>← Retour</LegalBack>
          <span>© 2026 beTool</span>
        </div>
      </footer>
    </div>
  );
}
