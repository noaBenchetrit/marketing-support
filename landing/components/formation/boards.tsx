/**
 * Tables beTool réutilisables — partagées entre l'ancien ImportSimulator
 * (gardé en backup) et le nouveau ProductShowcase.
 */

export type BoardId = 'stagiaires' | 'coaching' | 'sessions' | 'certification';

export type BadgeTone =
  | 'accept'   // jaune
  | 'wait'     // gris foncé
  | 'success'  // vert
  | 'todo'     // bleu
  | 'planned'  // violet
  | 'sent';    // orange

export type BtBadge = { label: string; tone: BadgeTone };

export const BOARDS: { id: BoardId; label: string }[] = [
  { id: 'stagiaires', label: 'Stagiaires' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'sessions', label: 'Sessions formateur' },
  { id: 'certification', label: 'Certification' },
];

type StagiaireRow = {
  date: string;
  statut: BtBadge;
  nom: string;
  formation: string;
  connexion: BtBadge;
  rac: string;
};
export const STAGIAIRES: StagiaireRow[] = [
  {
    date: '30/04/2026',
    statut: { label: 'Accepté', tone: 'accept' },
    nom: 'Chevalier Camille',
    formation: 'Création Site Web WordPress — 35h',
    connexion: { label: 'Connexion effectuée', tone: 'success' },
    rac: '0 €',
  },
  {
    date: '30/04/2026',
    statut: { label: 'En attente de traitement', tone: 'wait' },
    nom: 'Laurent Emma',
    formation: 'Formation Google Workspace',
    connexion: { label: 'À traiter', tone: 'todo' },
    rac: '120 €',
  },
  {
    date: '29/04/2026',
    statut: { label: 'Accepté', tone: 'accept' },
    nom: 'Bernard Lucas',
    formation: 'Formation Microsoft Word',
    connexion: { label: 'À traiter', tone: 'todo' },
    rac: '0 €',
  },
  {
    date: '28/04/2026',
    statut: { label: 'Accepté', tone: 'accept' },
    nom: 'Moreau Julien',
    formation: 'Bureautique Excel — 35h',
    connexion: { label: 'Connexion effectuée', tone: 'success' },
    rac: '0 €',
  },
  {
    date: '28/04/2026',
    statut: { label: 'Accepté', tone: 'accept' },
    nom: 'Saidi Mehdi',
    formation: 'Anglais professionnel — 40h',
    connexion: { label: 'Connexion effectuée', tone: 'success' },
    rac: '0 €',
  },
];

type CoachingRow = {
  date: string;
  nom: string;
  formation: string;
  statut: BtBadge;
  dateCoaching: string;
  coach: string;
};
export const COACHING: CoachingRow[] = [
  {
    date: '04/05/2026 13:39',
    nom: 'Chevalier Camille',
    formation: 'Création Site Web WordPress',
    statut: { label: 'À traiter', tone: 'todo' },
    dateCoaching: '13/05/2026 09:15',
    coach: 'Sophie Lambert',
  },
  {
    date: '04/05/2026 12:21',
    nom: 'Laurent Emma',
    formation: 'Formation Google Workspace',
    statut: { label: 'Session planifiée', tone: 'planned' },
    dateCoaching: '11/05/2026 14:00',
    coach: 'Marc Dubois',
  },
  {
    date: '03/05/2026 12:18',
    nom: 'Bernard Lucas',
    formation: 'Formation Microsoft Word',
    statut: { label: 'Session planifiée', tone: 'planned' },
    dateCoaching: '10/05/2026 10:45',
    coach: 'Sophie Lambert',
  },
];

type SessionRow = {
  date: string;
  nom: string;
  formation: string;
  statut: BtBadge;
  formateur: string;
  hPrev: string;
  hReal: string;
};
export const SESSIONS: SessionRow[] = [
  {
    date: '13/05/2026 09:12',
    nom: 'Chevalier Camille',
    formation: 'Création Site Web WordPress',
    statut: { label: 'À réaliser', tone: 'todo' },
    formateur: 'Hugo Renard',
    hPrev: '35h',
    hReal: '0h',
  },
  {
    date: '11/05/2026 14:00',
    nom: 'Laurent Emma',
    formation: 'Formation Google Workspace',
    statut: { label: 'À réaliser', tone: 'todo' },
    formateur: 'Hugo Renard',
    hPrev: '21h',
    hReal: '0h',
  },
  {
    date: '04/05/2026 12:18',
    nom: 'Moreau Julien',
    formation: 'Bureautique Excel — 35h',
    statut: { label: 'Réalisée', tone: 'success' },
    formateur: 'Inès Caron',
    hPrev: '35h',
    hReal: '35h',
  },
  {
    date: '04/05/2026 12:08',
    nom: 'Saidi Mehdi',
    formation: 'Anglais professionnel',
    statut: { label: 'Réalisée', tone: 'success' },
    formateur: 'Inès Caron',
    hPrev: '40h',
    hReal: '40h',
  },
];

type CertifRow = {
  date: string;
  nom: string;
  statut: BtBadge;
  type: BtBadge;
  email: string;
};
export const CERTIFICATIONS: CertifRow[] = [
  {
    date: '04/05/2026 11:34',
    nom: 'Moreau Julien',
    statut: { label: 'Envoyé', tone: 'sent' },
    type: { label: 'ICDL', tone: 'accept' },
    email: 'j.moreau@formaplus.fr',
  },
  {
    date: '03/05/2026 09:21',
    nom: 'Saidi Mehdi',
    statut: { label: 'Envoyé', tone: 'sent' },
    type: { label: 'TOEIC', tone: 'accept' },
    email: 'm.saidi@formaplus.fr',
  },
];

export function Badge({ b }: { b: BtBadge }) {
  return <span className={`bt-badge bt-badge-${b.tone}`}>{b.label}</span>;
}

export function BoardTable({ board }: { board: BoardId }) {
  if (board === 'stagiaires') {
    return (
      <div className="bt-table-wrap bt-table-stagiaires">
        <div className="bt-table-row bt-table-head">
          <span>Date création</span>
          <span>Statut dossier</span>
          <span>Nom stagiaire</span>
          <span>Nom formation</span>
          <span>Statut connexion</span>
          <span>R.A.C</span>
        </div>
        {STAGIAIRES.map((s, i) => (
          <div
            key={`stag-${i}`}
            className="bt-table-row bt-table-body-row"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="bt-cell-date">{s.date}</span>
            <span><Badge b={s.statut} /></span>
            <span className="bt-cell-name">{s.nom}</span>
            <span className="bt-cell-formation">{s.formation}</span>
            <span><Badge b={s.connexion} /></span>
            <span className="bt-cell-rac">{s.rac}</span>
          </div>
        ))}
        <div className="bt-table-foot" aria-hidden="true">
          + 10 autres stagiaires importés
        </div>
      </div>
    );
  }

  if (board === 'coaching') {
    return (
      <div className="bt-table-wrap bt-table-coaching">
        <div className="bt-table-row bt-table-head">
          <span>Date création</span>
          <span>Nom stagiaire</span>
          <span>Nom formation</span>
          <span>Statut</span>
          <span>Date coaching</span>
          <span>Coach</span>
        </div>
        {COACHING.map((c, i) => (
          <div
            key={`coa-${i}`}
            className="bt-table-row bt-table-body-row"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="bt-cell-date">{c.date}</span>
            <span className="bt-cell-name">{c.nom}</span>
            <span className="bt-cell-formation">{c.formation}</span>
            <span><Badge b={c.statut} /></span>
            <span className="bt-cell-date">{c.dateCoaching}</span>
            <span className="bt-cell-formation">{c.coach}</span>
          </div>
        ))}
        <div className="bt-table-foot" aria-hidden="true">
          3 sessions de coaching planifiées cette semaine
        </div>
      </div>
    );
  }

  if (board === 'sessions') {
    return (
      <div className="bt-table-wrap bt-table-sessions">
        <div className="bt-table-row bt-table-head">
          <span>Date session</span>
          <span>Nom stagiaire</span>
          <span>Nom formation</span>
          <span>Statut</span>
          <span>Formateur</span>
          <span>Heures</span>
        </div>
        {SESSIONS.map((s, i) => (
          <div
            key={`ses-${i}`}
            className="bt-table-row bt-table-body-row"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="bt-cell-date">{s.date}</span>
            <span className="bt-cell-name">{s.nom}</span>
            <span className="bt-cell-formation">{s.formation}</span>
            <span><Badge b={s.statut} /></span>
            <span className="bt-cell-formation">{s.formateur}</span>
            <span className="bt-cell-rac">{s.hReal} / {s.hPrev}</span>
          </div>
        ))}
        <div className="bt-table-foot" aria-hidden="true">
          75 heures réalisées · 56 heures à planifier
        </div>
      </div>
    );
  }

  return (
    <div className="bt-table-wrap bt-table-certification">
      <div className="bt-table-row bt-table-head">
        <span>Date création</span>
        <span>Nom stagiaire</span>
        <span>Statut</span>
        <span>Type</span>
        <span>Email</span>
      </div>
      {CERTIFICATIONS.map((c, i) => (
        <div
          key={`cer-${i}`}
          className="bt-table-row bt-table-body-row"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span className="bt-cell-date">{c.date}</span>
          <span className="bt-cell-name">{c.nom}</span>
          <span><Badge b={c.statut} /></span>
          <span><Badge b={c.type} /></span>
          <span className="bt-cell-formation">{c.email}</span>
        </div>
      ))}
      <div className="bt-table-foot" aria-hidden="true">
        2 certifications envoyées · 100&nbsp;% taux de réussite
      </div>
    </div>
  );
}
