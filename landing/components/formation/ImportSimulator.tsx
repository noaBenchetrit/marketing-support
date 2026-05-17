'use client';

import { useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'dragging' | 'auto-move' | 'loading' | 'done';

type BadgeTone =
  | 'accept' // jaune
  | 'wait'   // gris foncé
  | 'success' // vert (Connexion effectuée / Realisée)
  | 'todo'   // bleu (À traiter / À réaliser)
  | 'planned' // violet (Session planifiée)
  | 'sent';  // orange (Envoyé)
type BtBadge = { label: string; tone: BadgeTone };

type BoardId = 'stagiaires' | 'coaching' | 'sessions' | 'certification';

const BOARDS: { id: BoardId; label: string }[] = [
  { id: 'stagiaires', label: 'Stagiaires' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'sessions', label: 'Sessions formateur' },
  { id: 'certification', label: 'Certification' },
];

/* --- Board Stagiaires : résultat brut de l'import IA --- */
type StagiaireRow = {
  date: string;
  statut: BtBadge;
  nom: string;
  formation: string;
  connexion: BtBadge;
  rac: string;
};
const STAGIAIRES: StagiaireRow[] = [
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

/* --- Board Coaching : les stagiaires nécessitant accompagnement --- */
type CoachingRow = {
  date: string;
  nom: string;
  formation: string;
  statut: BtBadge;
  dateCoaching: string;
  coach: string;
};
const COACHING: CoachingRow[] = [
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

/* --- Board Sessions formateur : suivi des heures pédagogiques --- */
type SessionRow = {
  date: string;
  nom: string;
  formation: string;
  statut: BtBadge;
  formateur: string;
  hPrev: string;
  hReal: string;
};
const SESSIONS: SessionRow[] = [
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

/* --- Board Certification : examens passés --- */
type CertifRow = {
  date: string;
  nom: string;
  statut: BtBadge;
  type: BtBadge;
  email: string;
};
const CERTIFICATIONS: CertifRow[] = [
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

const COUNTERS: { label: string; target: number; suffix?: string }[] = [
  { label: 'Stagiaires extraits de votre Excel', target: 15, suffix: '/15' },
  { label: 'Erreurs ou rejets financeurs', target: 0 },
];

function useCountUp(target: number, start: boolean, durationMs = 700) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (target === 0) {
      setValue(0);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs]);
  return value;
}

function Counter({
  label,
  target,
  suffix,
  start,
  delay,
}: {
  label: string;
  target: number;
  suffix?: string;
  start: boolean;
  delay: number;
}) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!start) {
      setArmed(false);
      return;
    }
    const t = setTimeout(() => setArmed(true), delay);
    return () => clearTimeout(t);
  }, [start, delay]);
  const value = useCountUp(target, armed);
  return (
    <div className="sim-counter" style={{ animationDelay: `${delay}ms` }}>
      <span className="led" aria-hidden="true" />
      <span>{label}</span>
      <strong>
        {value}
        {suffix ?? ''}
      </strong>
    </div>
  );
}

function ExcelIcon() {
  return (
    <svg viewBox="0 0 32 38" fill="none" aria-hidden="true">
      <path
        d="M3 3a2 2 0 0 1 2-2h14l10 10v24a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z"
        fill="#fff"
        stroke="rgba(15,23,42,0.18)"
        strokeWidth="0.8"
      />
      <path d="M19 1v10h10" fill="#E5E7EB" stroke="rgba(15,23,42,0.18)" strokeWidth="0.8" />
      <rect x="3" y="20" width="26" height="13" rx="1.5" fill="#0E7C42" />
      <text
        x="16"
        y="29.5"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="6.5"
        fontWeight="700"
        fill="#fff"
      >
        XLSX
      </text>
    </svg>
  );
}

function Badge({ b }: { b: BtBadge }) {
  return <span className={`bt-badge bt-badge-${b.tone}`}>{b.label}</span>;
}

function BoardTable({ board }: { board: BoardId }) {
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

  // certification
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

export default function ImportSimulator() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const [dragDelta, setDragDelta] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeBoard, setActiveBoard] = useState<BoardId>('stagiaires');

  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsHoverDevice(window.matchMedia('(hover: hover)').matches);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function triggerAutoMove() {
    setPhase('auto-move');
    timeoutRef.current = setTimeout(() => {
      setPhase('loading');
      timeoutRef.current = setTimeout(() => setPhase('done'), 1200);
    }, 900);
  }

  function startLoadingAfterDrop() {
    setPhase('loading');
    timeoutRef.current = setTimeout(() => setPhase('done'), 1200);
  }

  // Drag via translate uniquement — l'icône reste dans son flex parent.
  // Pas de position:absolute, pas de math de coordonnées local↔écran : robuste face au tilt 3D.
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // bouton gauche uniquement
    if (phase !== 'idle') return;
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    setDragDelta({ x: 0, y: 0 });
    setPhase('dragging');

    const onMove = (ev: MouseEvent) => {
      setDragDelta({ x: ev.clientX - startX, y: ev.clientY - startY });
    };
    const onUp = (ev: MouseEvent) => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      const drop = dropRef.current;
      if (!drop) {
        setDragDelta({ x: 0, y: 0 });
        setPhase('idle');
        return;
      }
      const r = drop.getBoundingClientRect();
      const inside =
        ev.clientX >= r.left &&
        ev.clientX <= r.right &&
        ev.clientY >= r.top &&
        ev.clientY <= r.bottom;
      setDragDelta({ x: 0, y: 0 });
      if (inside) startLoadingAfterDrop();
      else setPhase('idle');
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    void e;
  };

  // Tap tactile = auto-move (le pointerdown a return immédiatement, donc onClick fait foi)
  const onIconTap = () => {
    if (phase !== 'idle') return;
    if (isHoverDevice) return; // desktop : drag prend le relais
    triggerAutoMove();
  };

  const showIdleStage = phase === 'idle' || phase === 'dragging' || phase === 'auto-move';
  const iconHidden = phase === 'loading' || phase === 'done';

  const iconInlineStyle: React.CSSProperties =
    phase === 'dragging'
      ? {
          transform: `translate(${dragDelta.x}px, ${dragDelta.y}px) rotate(-3deg) scale(1.05)`,
          cursor: 'grabbing',
          zIndex: 5,
          transition: 'none',
        }
      : {};

  return (
    <div className="sim-wrap" ref={wrapRef}>
      <div className="sim" aria-live="polite">
        <div className="sim-titlebar">
          <span className="sim-dot r" />
          <span className="sim-dot y" />
          <span className="sim-dot g" />
          <span className="sim-titlebar-label">beTool — Import IA</span>
        </div>

        <div className="sim-body sim-stage" ref={stageRef}>
          {showIdleStage && (
            <>
              <div className="sim-left-pane">
                <div
                  ref={iconRef}
                  className={`sim-excel${phase === 'auto-move' ? ' sim-excel--auto' : ''}${phase === 'dragging' ? ' sim-excel--drag' : ''}${iconHidden ? ' sim-excel--hidden' : ''}`}
                  style={iconInlineStyle}
                  onMouseDown={onMouseDown}
                  onTouchStart={onTouchStart}
                  onClick={onIconTap}
                  onDragStart={(e) => e.preventDefault()}
                  draggable={false}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isHoverDevice
                      ? 'Glissez ce fichier Excel vers la zone de dépôt'
                      : 'Touchez pour lancer l’analyse du fichier'
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (phase === 'idle') triggerAutoMove();
                    }
                  }}
                >
                  <div className="sim-excel-icon" draggable={false}>
                    <ExcelIcon />
                  </div>
                  <div className="sim-excel-name">stagiaires.xlsx</div>
                  <div className="sim-excel-meta">15 lignes · 8 colonnes</div>
                </div>

                {phase === 'idle' && (
                  <div className="sim-arrow" aria-hidden="true">
                    <svg viewBox="0 0 80 24" fill="none">
                      <path
                        d="M2 12h62"
                        stroke="rgba(56, 189, 248, 0.7)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="3 5"
                      />
                      <path
                        d="M58 6l10 6-10 6"
                        stroke="rgba(56, 189, 248, 0.9)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div
                ref={dropRef}
                className={`sim-drop${phase === 'dragging' ? ' sim-drop--active' : ''}`}
                aria-label="Zone de dépôt"
              >
                <span className="sim-drop-icon" aria-hidden="true">⬇</span>
                <span className="sim-drop-label">
                  Déposez votre fichier Excel de stagiaires <br />
                  ici pour tester
                </span>
                <span className="sim-drop-hint">{isHoverDevice ? '.xlsx · .csv · glisser-déposer' : 'Touchez l’icône à gauche'}</span>
              </div>
            </>
          )}

          {phase === 'loading' && (
            <div className="sim-loading">
              <div className="sim-laser" aria-hidden="true" />
              <div className="sim-loading-text">
                <span className="sim-loading-pulse" aria-hidden="true" />
                Calculateur de conformité beTool en cours…
              </div>
            </div>
          )}

          {phase === 'done' && (
            <div className="sim-results">
              <div className="sim-dashboard sim-dashboard-bt">
                <div className="bt-tabs" role="tablist">
                  {BOARDS.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      role="tab"
                      aria-selected={activeBoard === b.id}
                      className={`bt-tab${activeBoard === b.id ? ' bt-tab-active' : ''}`}
                      onClick={() => setActiveBoard(b.id)}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>

                <div className="bt-toolbar" aria-hidden="true">
                  <div className="bt-toolbar-left">
                    <span className="bt-pill bt-pill-board">
                      <span className="bt-pill-star">★</span> Datatable
                    </span>
                    <span className="bt-pill bt-pill-search">
                      <span className="bt-pill-icon">⌕</span> Rechercher
                    </span>
                    <span className="bt-pill bt-pill-add">＋ Ajouter</span>
                    <span className="bt-pill bt-pill-filter">⌃ Filtres</span>
                  </div>
                  <span className="bt-pill bt-pill-presel">＋ Mes Pré-Sélections</span>
                </div>

                <BoardTable board={activeBoard} />
              </div>

              <div className="sim-counters">
                {COUNTERS.map((c, i) => (
                  <Counter
                    key={c.label}
                    label={c.label}
                    target={c.target}
                    suffix={c.suffix}
                    start={phase === 'done'}
                    delay={500 + i * 280}
                  />
                ))}
                <div className="sim-counter sim-counter-status">
                  <span className="led" aria-hidden="true" />
                  <span>Statut du dossier</span>
                  <strong>100&nbsp;% Conforme Qualiopi</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
