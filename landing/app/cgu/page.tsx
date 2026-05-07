import Link from 'next/link';
import LegalToc, { type TocItem } from '@/components/legal/LegalToc';
import LegalBack from '@/components/legal/LegalBack';

const TOC_ITEMS: TocItem[] = [
  { id: 'intro', label: 'Préambule' },
  { id: 'art-1', label: '1. Introduction' },
  { id: 'art-2', label: '2. Définitions' },
  { id: 'art-3', label: '3. Objet des CGU' },
  { id: 'art-4', label: "4. Conditions d'utilisation" },
  { id: 'art-5', label: '5. Accès au site' },
  { id: 'art-6', label: '6. Propriété intellectuelle' },
  { id: 'art-7', label: '7. Confidentialité' },
  { id: 'art-8', label: "8. Publication par l'Utilisateur" },
  { id: 'art-9', label: '9. Responsabilité' },
  { id: 'art-10', label: '10. Modalités de paiement' },
  { id: 'art-11', label: '11. Résiliation' },
  { id: 'art-12', label: '12. Loi applicable' },
  { id: 'art-13', label: '13. Liens hypertextes' },
  { id: 'art-14', label: '14. Cookies' },
];

export const metadata = {
  title: 'CGU / CGV — beTool',
  description:
    "Conditions générales d'utilisation et de vente de la plateforme beTool, en vigueur au 01/01/2025.",
};

export default function CguPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <LegalBack>← Retour</LegalBack>
          <h1>Conditions générales d&apos;utilisation</h1>
          <p className="legal-meta">En vigueur au 01/01/2025</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <div className="legal-layout">
            <article className="legal-content">
          <section id="intro" className="legal-intro">
            <p>
              Les présentes conditions générales d&apos;utilisation régissent l&apos;utilisation de beTool, la
              propriété intellectuelle de Technician Soft Solution, et commercialisé par Soft Group Technologies.
              Technician Soft Solution est le propriétaire exclusif de tous les droits de propriété intellectuelle
              relatifs à beTool. SASU Soft Group Technologies SIREN 921 865 358, une société de droit français, est
              responsable de la commercialisation de beTool. L&apos;utilisation de beTool est soumise à
              l&apos;acceptation de ces conditions, qui incluent les modalités de licence accordées par Technician
              Soft Solution et les conditions de vente et de service fournies par Soft Group Technologies.
            </p>
            <p>
              Les présentes conditions générales d&apos;utilisation (dites «&nbsp;CGU&nbsp;») ont pour objet
              l&apos;encadrement juridique des modalités de mise à disposition du site et des services par{' '}
              <a href="https://www.betool.fr">https://www.betool.fr</a> et de définir les conditions d&apos;accès
              et d&apos;utilisation des services par «&nbsp;l&apos;Utilisateur&nbsp;».
            </p>
            <p>
              Les présentes CGU sont accessibles sur le site à la rubrique «&nbsp;CGU&nbsp;».
            </p>
            <p>
              Toute inscription ou utilisation du site implique l&apos;acceptation sans aucune réserve ni
              restriction des présentes CGU par l&apos;utilisateur. Lors de l&apos;inscription sur le site via le
              formulaire d&apos;inscription, chaque utilisateur accepte expressément les présentes CGU en cochant
              la case précédant le texte suivant&nbsp;: «&nbsp;Je reconnais avoir lu et compris les CGU et je les
              accepte&nbsp;». En cas de non-acceptation des CGU stipulées dans le présent contrat,
              l&apos;Utilisateur se doit de renoncer à l&apos;accès aux services proposés par le site.
              www.betool.fr se réserve le droit de modifier unilatéralement et à tout moment le contenu des
              présentes CGU.
            </p>
            <p>
              Le site <a href="https://www.betool.fr">https://www.betool.fr</a> se réserve le droit de modifier
              unilatéralement et à tout moment le contenu des présentes CGU.
            </p>
          </section>

          <section id="art-1">
            <h2>1. Introduction</h2>
            <p>
              Bienvenue sur notre plateforme SaaS de type WorkSpace, Work System, Work OS, CRM, ERP, Gestion de
              projet et Ticketing Solution. En tant que fournisseur de logiciels, nous proposons des services de
              licences utilisateurs, de licences d&apos;applications, ainsi que des services d&apos;accompagnement
              au paramétrage d&apos;éléments divers tels que l&apos;architecture, les documents, les templates,
              les API, etc. Notre solution est entièrement no-code, permettant à nos utilisateurs de créer des
              applications personnalisées sans avoir à écrire une seule ligne de code.
            </p>
            <p>
              Les présentes conditions générales d&apos;utilisation (dites «&nbsp;CGU&nbsp;») ont pour objet de
              définir les modalités d&apos;utilisation de notre plateforme et des services que nous proposons.
            </p>
            <p>
              En accédant et en utilisant notre plateforme et nos services, vous acceptez sans réserve les
              présentes CGU.
            </p>
            <p>Veuillez les lire attentivement avant de continuer à utiliser notre plateforme et nos services.</p>
          </section>

          <section id="art-2">
            <h2>2. Définitions</h2>
            <dl className="legal-defs">
              <dt>Fournisseur</dt>
              <dd>
                désigne notre société, fournisseur de logiciels SaaS de type WorkSpace, Work System, Work OS, CRM,
                ERP, Gestion de projet et Ticketing Solution en full no-code, proposant des services de type
                licences utilisateurs, licences d&apos;applications et des services d&apos;accompagnement au
                paramétrage d&apos;éléments divers (architecture, documents, templates, API, etc.).
              </dd>
              <dt>Client</dt>
              <dd>
                désigne toute personne physique ou morale qui utilise les services proposés par notre société, que
                ce soit en tant qu&apos;utilisateur final ou en tant qu&apos;administrateur autorisé par
                l&apos;utilisateur final.
              </dd>
              <dt>Utilisateur</dt>
              <dd>
                désigne toute personne physique ou morale qui utilise le site et/ou les services proposés par
                notre société.
              </dd>
              <dt>Site</dt>
              <dd>
                désigne le site web <a href="https://betool.fr">https://betool.fr</a> et ses sous-domaines, ainsi
                que toute application mobile ou autre plateforme utilisée pour accéder aux services proposés par
                notre société.
              </dd>
              <dt>Services</dt>
              <dd>
                désigne l&apos;ensemble des services proposés par notre société, tels que les licences
                d&apos;utilisation de notre logiciel, les services d&apos;accompagnement pour le paramétrage et la
                personnalisation de nos solutions, ainsi que tout autre service proposé par notre société.
              </dd>
              <dt>Licence utilisateur</dt>
              <dd>
                désigne l&apos;autorisation d&apos;utiliser notre logiciel et ses fonctionnalités, accordée par
                notre société à l&apos;utilisateur moyennant le paiement d&apos;un abonnement ou d&apos;une
                redevance.
              </dd>
              <dt>Licence d&apos;application</dt>
              <dd>
                désigne l&apos;autorisation d&apos;utiliser une application développée par notre société pour
                être intégrée dans le logiciel de l&apos;utilisateur, accordée par notre société moyennant le
                paiement d&apos;un abonnement ou d&apos;une redevance.
              </dd>
            </dl>
          </section>

          <section id="art-3">
            <h2>3. Objet des CGU</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités
              de mise à disposition du site internet et des services proposés par www.betool.fr, ainsi que les
              conditions d&apos;accès et d&apos;utilisation de ces services par les utilisateurs. Ces CGU
              régissent l&apos;ensemble des relations entre la société et les utilisateurs de son site, que
              ceux-ci soient simples visiteurs ou abonnés.
            </p>
            <p>
              L&apos;utilisation du site et de ses services implique l&apos;acceptation sans réserve des présentes
              CGU par l&apos;utilisateur. Si l&apos;utilisateur n&apos;accepte pas les termes des CGU, il est
              invité à quitter immédiatement le site et à ne pas utiliser les services proposés.
            </p>
            <p>
              La société se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes
              CGU. Il est donc recommandé à l&apos;utilisateur de consulter régulièrement la dernière version des
              CGU disponible sur le site.
            </p>
            <p>
              Les CGU ne créent aucun contrat de société, de mandat, de franchise ou de relation de travail entre
              la société et l&apos;utilisateur.
            </p>
          </section>

          <section id="art-4">
            <h2>4. Conditions d&apos;utilisation</h2>
            <p>
              L&apos;Utilisateur s&apos;engage à utiliser les services proposés par le Fournisseur en toute bonne
              foi et conformément aux présentes CGU, à la réglementation en vigueur et aux usages.
            </p>
            <p>
              L&apos;accès aux services proposés par le Fournisseur est réservé aux personnes majeures
              juridiquement capables de souscrire des contrats en droit français.
            </p>
            <p>
              L&apos;Utilisateur est seul responsable de l&apos;utilisation des services proposés par le
              Fournisseur et des données qu&apos;il enregistre, transmet ou reçoit dans le cadre de ces services.
              L&apos;Utilisateur s&apos;engage à ne pas porter atteinte à l&apos;ordre public, aux bonnes mœurs,
              aux droits de tiers ou à la sécurité du Fournisseur.
            </p>
            <p>
              L&apos;Utilisateur s&apos;engage à fournir des informations exactes, complètes et à jour lors de son
              inscription aux services proposés par le Fournisseur. Il s&apos;engage à informer le Fournisseur de
              toute modification de ces informations dans les plus brefs délais.
            </p>
            <p>
              Le Fournisseur se réserve le droit de suspendre ou de résilier l&apos;accès aux services proposés en
              cas de non-respect des présentes CGU ou en cas de violation de la réglementation en vigueur.
            </p>
          </section>

          <section id="art-5">
            <h2>5. Accès au site</h2>
            <p>
              Le site <a href="https://betool.fr">https://betool.fr</a> permet à l&apos;Utilisateur un accès aux
              services suivants&nbsp;:
            </p>
            <ul>
              <li>Achat ou location de licences utilisateurs</li>
              <li>Achat ou location de licences d&apos;applications proposées sur la plateforme</li>
            </ul>
            <p>
              Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous
              les frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique,
              logiciels, connexion Internet, etc.) sont à sa charge.
            </p>
            <p>
              L&apos;Utilisateur non membre n&apos;a pas accès aux services réservés. Pour cela, il doit
              s&apos;inscrire en remplissant le formulaire. En acceptant de s&apos;inscrire aux services réservés,
              l&apos;Utilisateur membre s&apos;engage à fournir des informations sincères et exactes concernant
              son état civil et ses coordonnées, notamment son adresse email. Pour accéder aux services,
              l&apos;Utilisateur doit ensuite s&apos;identifier à l&apos;aide de son identifiant et de son mot de
              passe qui lui seront communiqués après son inscription. Tout Utilisateur membre régulièrement
              inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace
              personnel. Celle-ci sera effective dans un délai raisonnable.
            </p>
            <p>
              Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou
              du serveur et sous réserve de toute interruption ou modification en cas de maintenance, n&apos;engage
              pas la responsabilité du Fournisseur. Dans ces cas, l&apos;Utilisateur accepte ainsi de ne pas tenir
              rigueur à l&apos;éditeur de toute interruption ou suspension de service, même sans préavis.
            </p>
            <p>
              L&apos;Utilisateur a la possibilité de contacter le site par messagerie électronique à
              l&apos;adresse email du Fournisseur&nbsp;:{' '}
              <a href="mailto:contact@betool.fr">contact@betool.fr</a>.
            </p>
          </section>

          <section id="art-6">
            <h2>6. Propriété intellectuelle</h2>
            <p>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, sons…) font
              l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus
              particulièrement par le droit d&apos;auteur.
            </p>
            <p>
              L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction,
              publication, copie des différents contenus. Il s&apos;engage à une utilisation des contenus du site
              dans un cadre strictement privé&nbsp;; toute utilisation à des fins commerciales ou publicitaires
              est strictement interdite.
            </p>
            <p>
              Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans
              l&apos;autorisation expresse de l&apos;exploitant du site Internet, constituerait une contrefaçon
              sanctionnée par l&apos;article L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              Il est rappelé, conformément à l&apos;article L122-5 du Code de la propriété intellectuelle, que
              l&apos;Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l&apos;auteur et sa
              source.
            </p>
          </section>

          <section id="art-7">
            <h2>7. Confidentialité et protection des données</h2>
            <p>
              Nous attachons une grande importance à la confidentialité et à la protection des données de nos
              clients. Dans le cadre de notre activité de fournisseur de services de gestion de données, nous
              collectons et traitons des données à caractère personnel de nos clients.
            </p>
            <h3>1. Collecte des données</h3>
            <p>
              Nous prenons très au sérieux la confidentialité et la protection de vos données personnelles. Nous
              ne collectons que les informations nécessaires à la fourniture de nos services, et nous ne
              partageons jamais ces informations avec des tiers sans votre consentement préalable. Lorsque vous
              utilisez nos services, nous pouvons collecter des informations telles que votre nom, votre adresse
              email, votre adresse IP, votre localisation, etc. Ces informations sont utilisées pour personnaliser
              et améliorer votre expérience utilisateur, ainsi que pour répondre à vos demandes et besoins.
            </p>
            <h3>2. Utilisation des données</h3>
            <p>
              Nous nous engageons à utiliser vos données personnelles uniquement dans le cadre de la fourniture de
              nos services, et à ne pas les utiliser à des fins commerciales ou publicitaires sans votre
              consentement préalable. Nous ne vendons pas vos données à des tiers et nous ne les partageons
              qu&apos;avec les prestataires de services tiers qui nous aident à fournir nos services (par exemple,
              des fournisseurs de stockage cloud). Nous pouvons également utiliser vos données pour vous envoyer
              des communications liées à nos services, telles que des mises à jour, des promotions, etc.
            </p>
            <h3>3. Stockage et sécurité des données</h3>
            <p>
              Nous prenons des mesures de sécurité raisonnables pour protéger vos données personnelles contre tout
              accès, utilisation, altération ou divulgation non autorisé. Nous utilisons des technologies de
              cryptage, des pare-feux, des mots de passe et des contrôles d&apos;accès pour protéger vos données
              personnelles. Nous stockons vos données dans des centres de données sécurisés et surveillons en
              permanence notre infrastructure pour détecter toute activité suspecte.
            </p>
            <h3>4. Droits des utilisateurs</h3>
            <p>
              Conformément aux lois applicables sur la protection des données, vous avez le droit de demander
              l&apos;accès, la rectification, la suppression et la portabilité de vos données personnelles. Vous
              pouvez également demander la limitation du traitement de vos données personnelles ou vous opposer à
              leur traitement à des fins de marketing direct. Nous nous engageons à répondre rapidement et
              efficacement à toutes les demandes de nos utilisateurs concernant leurs données personnelles.
            </p>
            <h3>5. Durée de conservation des données</h3>
            <p>
              Nous ne conservons vos données personnelles que pendant la durée nécessaire à la fourniture de nos
              services ou à des fins légales ou réglementaires. Nous détruisons vos données personnelles de
              manière sécurisée lorsque nous n&apos;en avons plus besoin ou lorsque vous nous demandez de le
              faire.
            </p>
            <p>Vous pouvez consulter la page dédiée à la politique de confidentialité.</p>
          </section>

          <section id="art-8">
            <h2>8. Publication par l&apos;Utilisateur</h2>
            <p>Le site permet aux utilisateurs de publier les contenus suivants&nbsp;:</p>
            <ul>
              <li>template</li>
              <li>contenu textuel</li>
              <li>photo, image ou vidéo</li>
            </ul>
            <p>
              Dans ses publications, l&apos;utilisateur s&apos;engage à respecter les règles de la nétiquette
              (règles de bonne conduite sur Internet) et les règles de droit en vigueur.
            </p>
            <p>
              Le site peut exercer une modération sur les publications et se réserve le droit de refuser leur mise
              en ligne, sans avoir à s&apos;en justifier auprès de l&apos;utilisateur.
            </p>
            <p>
              L&apos;utilisateur reste titulaire de l&apos;intégralité de ses droits de propriété intellectuelle.
              Mais en publiant une publication sur le site, il cède à la société éditrice le droit non exclusif et
              gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication,
              directement ou par un tiers autorisé, dans le monde entier, sur tout support (numérique ou
              physique), pour la durée de la propriété intellectuelle. L&apos;utilisateur cède notamment le droit
              d&apos;utiliser sa publication sur Internet et sur les réseaux de téléphonie mobile.
            </p>
            <p>
              La société éditrice s&apos;engage à faire figurer le nom de l&apos;utilisateur à proximité de chaque
              utilisation de sa publication.
            </p>
            <p>
              Tout contenu mis en ligne par l&apos;Utilisateur est de sa seule responsabilité. L&apos;Utilisateur
              s&apos;engage à ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces
              personnes. Tout recours en justice engagé par un tiers lésé contre le site sera pris en charge par
              l&apos;Utilisateur.
            </p>
            <p>
              Le contenu de l&apos;Utilisateur peut être à tout moment et pour n&apos;importe quelle raison
              supprimé ou modifié par le site, sans préavis.
            </p>
          </section>

          <section id="art-9">
            <h2>9. Responsabilité</h2>
            <p>
              Les sources des informations diffusées sur le site www.betool.fr sont réputées fiables, mais le site
              ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions. Les
              informations communiquées sont présentées à titre indicatif et sans valeur contractuelle. Malgré des
              mises à jour régulières, le site www.betool.fr ne peut être tenu responsable de la modification des
              dispositions administratives et juridiques survenant après la publication. De même, le site ne peut
              être tenu responsable de l&apos;utilisation et de l&apos;interprétation des informations contenues
              dans ce site.
            </p>
            <p>
              L&apos;Utilisateur s&apos;assure de garder son mot de passe secret. Toute divulgation du mot de
              passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l&apos;utilisation de
              son identifiant et de son mot de passe. Le site décline toute responsabilité dans ce cas de figure.
            </p>
            <p>
              Le site www.betool.fr ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient
              infecter l&apos;ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une
              utilisation, un accès ou un téléchargement provenant de ce site. La responsabilité du site ne peut
              être engagée en cas de force majeure ou du fait imprévisible et insurmontable d&apos;un tiers.
            </p>
          </section>

          <section id="art-10">
            <h2>10. Modalités de paiement</h2>
            <p>Le paiement de nos services s&apos;effectue selon les modalités suivantes&nbsp;:</p>
            <ul>
              <li>
                Pour les services souscrits à l&apos;achat de licences utilisateurs, le paiement se fait par
                avance et le montant est fixé en fonction du nombre de licences souscrites. Le paiement peut être
                effectué par virement bancaire, carte bancaire ou tout autre moyen de paiement accepté par notre
                société.
              </li>
              <li>
                Pour les services souscrits à la location de licences utilisateurs, le paiement s&apos;effectue
                mensuellement ou annuellement, selon les modalités définies dans le contrat de location. Le
                paiement peut être effectué par virement bancaire, carte bancaire ou tout autre moyen de paiement
                accepté par notre société.
              </li>
              <li>
                Les services d&apos;accompagnement au paramétrage sont facturés à l&apos;heure, selon les tarifs
                en vigueur. Le paiement peut être effectué par virement bancaire, carte bancaire ou tout autre
                moyen de paiement accepté par notre société.
              </li>
            </ul>
            <p>
              Tous les paiements doivent être effectués dans les délais impartis. En cas de retard de paiement,
              notre société se réserve le droit de suspendre ou de résilier le service en question, sans préjudice
              des autres droits et recours qui pourraient être exercés. Tout paiement effectué après la date
              limite entraînera automatiquement une majoration de 10&nbsp;% des sommes dues, sans préjudice des
              autres intérêts de retard.
            </p>
            <p>
              En cas de non-paiement, notre société se réserve le droit d&apos;engager toute action en justice qui
              serait nécessaire pour recouvrer les sommes dues.
            </p>
            <p>Tous les frais bancaires liés aux paiements sont à la charge du client.</p>
          </section>

          <section id="art-11">
            <h2>11. Résiliation et suspension</h2>
            <h3>1. Résiliation à l&apos;initiative de l&apos;utilisateur</h3>
            <p>
              L&apos;utilisateur peut résilier son contrat d&apos;utilisation à tout moment en envoyant une
              demande écrite de résiliation par courrier recommandé à l&apos;adresse email du fournisseur&nbsp;:{' '}
              <a href="mailto:contact@betool.fr">contact@betool.fr</a>. La résiliation prendra effet à la fin de
              la période d&apos;abonnement en cours, sauf en cas de violation des conditions générales
              d&apos;utilisation, auquel cas le fournisseur se réserve le droit de mettre fin immédiatement au
              contrat d&apos;utilisation sans préavis ni indemnité.
            </p>
            <h3>2. Résiliation à l&apos;initiative du fournisseur</h3>
            <p>
              Le fournisseur se réserve le droit de résilier le contrat d&apos;utilisation en cas de non-respect
              des conditions générales d&apos;utilisation par l&apos;utilisateur. Le cas échéant, la résiliation
              prendra effet immédiatement sans préavis ni indemnité. Le fournisseur peut également résilier le
              contrat d&apos;utilisation à tout moment, moyennant un préavis de 30 jours, sans avoir à justifier
              sa décision. Le cas échéant, le fournisseur remboursera à l&apos;utilisateur le montant
              correspondant à la période d&apos;abonnement restant à courir.
            </p>
            <h3>3. Conséquences de la résiliation</h3>
            <p>
              En cas de résiliation du contrat d&apos;utilisation, quelle qu&apos;en soit la raison,
              l&apos;utilisateur s&apos;engage à cesser immédiatement toute utilisation du service et à restituer
              au fournisseur l&apos;ensemble des documents, données et informations qui lui ont été confiés dans
              le cadre de l&apos;utilisation du service. Le fournisseur ne sera pas tenu responsable des dommages
              directs ou indirects causés à l&apos;utilisateur ou à des tiers du fait de la résiliation du contrat
              d&apos;utilisation.
            </p>
            <h3>4. Archivage des données</h3>
            <p>
              Suite à la résiliation du contrat d&apos;utilisation, le fournisseur s&apos;engage à conserver les
              données de l&apos;utilisateur pendant une période de 1 an à compter de la date de résiliation. Passé
              ce délai, le fournisseur pourra procéder à la suppression définitive de ces données, sauf si
              l&apos;utilisateur en demande expressément la conservation pour une durée supplémentaire. Dans tous
              les cas, le fournisseur garantit la confidentialité et la sécurité des données stockées.
            </p>
          </section>

          <section id="art-12">
            <h2>12. Loi applicable et juridiction compétente</h2>
            <p>Les présentes CGU sont soumises à la loi française.</p>
            <p>
              En cas de litige survenant entre les parties à l&apos;occasion de l&apos;exécution des présentes,
              les parties conviennent de tenter de régler le différend à l&apos;amiable. À défaut d&apos;accord
              amiable dans un délai de trente (30) jours à compter de la notification du litige par l&apos;une des
              parties à l&apos;autre, le différend sera soumis aux tribunaux compétents de Paris, nonobstant
              pluralité de défendeurs ou appel en garantie.
            </p>
            <p>
              Il est rappelé que la société éditrice n&apos;est qu&apos;un prestataire technique pour le compte de
              l&apos;utilisateur final. La société éditrice ne pourra être tenue pour responsable de tout litige
              survenant entre l&apos;utilisateur final et un tiers. Tout litige devra être résolu directement
              entre l&apos;utilisateur final et le tiers concerné, sans impliquer la responsabilité de la société
              éditrice.
            </p>
            <p>
              Les parties reconnaissent expressément que les présentes CGU ne créent aucune communauté de droit,
              ni aucun mandat, ni aucune société entre les parties et que chacune conserve sa pleine et entière
              indépendance.
            </p>
            <p>
              Toute renonciation à exercer un droit prévu par les présentes CGU ne pourra être interprétée comme
              une renonciation à exercer tout autre droit ou à la même disposition à un autre moment.
            </p>
            <p>
              Les titres des articles des présentes CGU ont été inclus pour plus de commodité, mais
              n&apos;affecteront pas la signification ou l&apos;interprétation des présentes CGU.
            </p>
          </section>

          <section id="art-13">
            <h2>13. Liens hypertextes</h2>
            <p>
              Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en
              cliquant sur ces liens, il sortira du site <a href="https://betool.fr">https://betool.fr</a>. Ce
              dernier n&apos;a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne
              saurait, en aucun cas, être responsable de leur contenu.
            </p>
          </section>

          <section id="art-14">
            <h2>14. Cookies</h2>
            <p>
              L&apos;Utilisateur est informé que lors de ses visites sur le site, un cookie peut s&apos;installer
              automatiquement sur son logiciel de navigation.
            </p>
            <p>
              Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l&apos;ordinateur de
              l&apos;Utilisateur par son navigateur, et qui sont nécessaires à l&apos;utilisation du site{' '}
              <a href="https://betool.fr">https://betool.fr</a>. Les cookies ne contiennent pas d&apos;informations
              personnelles et ne peuvent pas être utilisés pour identifier quelqu&apos;un. Un cookie contient un
              identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la
              visite de l&apos;Utilisateur, d&apos;autres restent.
            </p>
            <p>
              L&apos;information contenue dans les cookies est utilisée pour améliorer le site{' '}
              <a href="https://betool.fr">https://betool.fr</a>.
            </p>
            <p>En naviguant sur le site, l&apos;Utilisateur les accepte.</p>
            <p>L&apos;Utilisateur doit toutefois donner son consentement quant à l&apos;utilisation de certains cookies.</p>
            <p>
              À défaut d&apos;acceptation, l&apos;Utilisateur est informé que certaines fonctionnalités ou pages
              risquent de lui être refusées.
            </p>
            <p>
              L&apos;Utilisateur pourra désactiver ces cookies par l&apos;intermédiaire des paramètres figurant au
              sein de son logiciel de navigation.
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
