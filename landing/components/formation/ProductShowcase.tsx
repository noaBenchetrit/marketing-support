'use client';

import { useEffect, useRef, useState } from 'react';
import { BoardTable, type BoardId } from './boards';

type ShowcaseTabId = 'pipeline' | 'admin' | 'peda' | 'facturation';
type Phase = 'idle' | 'dragging' | 'auto-move' | 'loading' | 'done';

type Promise = { icon: string; title: string; desc: string };

type ShowcaseTab = {
  id: ShowcaseTabId;
  label: string;
  board: BoardId;
  title: string;
  promises: Promise[];
};

const TABS: ShowcaseTab[] = [
  {
    id: 'pipeline',
    label: 'Pipeline & Ventes',
    board: 'stagiaires',
    title: 'Transformez vos prospects en apprenants, sans effort.',
    promises: [
      {
        icon: '📈',
        title: 'Relances automatisées',
        desc: 'Ne perdez plus aucun lead grâce aux scénarios de suivi intégrés.',
      },
      {
        icon: '⚡',
        title: 'Centralisation des flux',
        desc: 'Vos demandes de formation (site, CPF, mail) atterrissent au même endroit.',
      },
      {
        icon: '🔄',
        title: 'Zéro double-saisie',
        desc: 'Un prospect signé bascule en « apprenant » en un seul clic.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Gestion Administrative & Qualiopi',
    board: 'certification',
    title: 'Votre conformité administrative automatisée à 100 %.',
    promises: [
      {
        icon: '📝',
        title: 'Documents en 1 clic',
        desc: 'Générez vos conventions, contrats et convocations pré-remplis.',
      },
      {
        icon: '🛡️',
        title: 'Coffre-fort Qualiopi',
        desc: 'Centralisez les pièces justificatives exigées lors de vos audits.',
      },
      {
        icon: '⏳',
        title: 'Économie de temps',
        desc: 'Divisez par 3 le temps passé sur l’édition des documents réglementaires.',
      },
    ],
  },
  {
    id: 'peda',
    label: 'Suivi Pédagogique',
    board: 'coaching',
    title: 'Le lien parfait entre vos formateurs et vos apprenants.',
    promises: [
      {
        icon: '📱',
        title: 'Émargements simplifiés',
        desc: 'Suivez les présences et générez les feuilles d’émargement sans papier.',
      },
      {
        icon: '📊',
        title: 'Évaluations intégrées',
        desc: 'Centralisez les quiz de satisfaction et les validations d’acquis.',
      },
      {
        icon: '🤝',
        title: 'Espace Formateurs',
        desc: 'Donnez à vos intervenants un accès direct à leur planning.',
      },
    ],
  },
  {
    id: 'facturation',
    label: 'Facturation & RH',
    board: 'sessions',
    title: 'Maîtrisez vos finances et la gestion de vos intervenants.',
    promises: [
      {
        icon: '🧾',
        title: 'Facturation automatisée',
        desc: 'Éditez vos factures et gérez les subventions (OPCO, CPF) sans erreur.',
      },
      {
        icon: '💼',
        title: 'Rémunération Formateurs',
        desc: 'Calculez automatiquement les honoraires selon les heures réelles.',
      },
      {
        icon: '🔗',
        title: 'Synchro Compta',
        desc: 'Exportez vos journaux de ventes vers vos outils comptables.',
      },
    ],
  },
];

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

export default function ProductShowcase() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const [dragDelta, setDragDelta] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState<ShowcaseTabId>('pipeline');

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

  // Drag exact mécanique de ImportSimulator : translate uniquement,
  // listeners window synchrones, hit-test rectangulaire à mouseup.
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
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

  const onIconTap = () => {
    if (phase !== 'idle') return;
    if (isHoverDevice) return;
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

  const activeTab = TABS.find((t) => t.id === activeId) ?? TABS[0];
  const titlebarLabel =
    phase === 'done'
      ? `beTool — ${activeTab.label}`
      : 'beTool — Import automatique';

  return (
    <div className="showcase">
      {/* Chrome-style tabs above the window. Visible uniquement en phase done. */}
      {phase === 'done' && (
        <div className="showcase-chrome-tabs" role="tablist" aria-label="Modules beTool">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={activeId === t.id}
              className={`showcase-chrome-tab${activeId === t.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(t.id)}
            >
              <span className="showcase-chrome-tab-label">{t.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Window (chromed macOS) */}
      <div className={`showcase-sim${phase === 'done' ? ' showcase-sim--tabbed' : ''}`}>
        <div className="showcase-sim-titlebar">
          <span className="sim-dot r" />
          <span className="sim-dot y" />
          <span className="sim-dot g" />
          <span className="sim-titlebar-label">{titlebarLabel}</span>
        </div>

        {/* Idle / dragging / auto-move / loading : on garde la zone .sim-stage du simulateur */}
        {phase !== 'done' && (
          <div className="sim-body sim-stage showcase-sim-stage">
            {phase === 'idle' && (
              <div className="sim-coach" aria-hidden="true">
                <div className="sim-coach-cursor">
                  <svg viewBox="0 0 24 24" className="sim-coach-cursor-svg">
                    <path
                      d="M5 3l13 8.5-6.2 1.3L8.5 20 5 3z"
                      fill="#fff"
                      stroke="#0F172A"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sim-coach-ghost" aria-hidden="true">
                    <span className="sim-coach-ghost-mini">XLSX</span>
                  </span>
                  <span className="sim-coach-ripple" aria-hidden="true" />
                  <span className="sim-coach-label">
                    {isHoverDevice ? 'Cliquez et glissez' : 'Touchez le fichier'}
                  </span>
                </div>
              </div>
            )}

            {showIdleStage && (
              <>
                <div className="sim-left-pane">
                  <div
                    className={`sim-excel${phase === 'auto-move' ? ' sim-excel--auto' : ''}${phase === 'dragging' ? ' sim-excel--drag' : ''}${iconHidden ? ' sim-excel--hidden' : ''}`}
                    style={iconInlineStyle}
                    onMouseDown={onMouseDown}
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
                  <span className="sim-drop-hint">
                    {isHoverDevice ? '.xlsx · .csv · glisser-déposer' : 'Touchez l’icône à gauche'}
                  </span>
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
          </div>
        )}

        {/* Phase done : table beTool intégrée à la fenêtre */}
        {phase === 'done' && (
          <div className="showcase-sim-body" key={activeTab.id}>
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
            <div className="showcase-table-frame">
              <BoardTable board={activeTab.board} />
            </div>
          </div>
        )}
      </div>

      {/* 3 cards de promesses en bas. Visibles en phase done uniquement. */}
      {phase === 'done' && (
        <ul className="showcase-promises" key={`promises-${activeTab.id}`}>
          {activeTab.promises.map((p) => (
            <li key={p.title}>
              <span className="showcase-promise-icon" aria-hidden="true">
                {p.icon}
              </span>
              <div>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
