'use client';

import { useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

type EventColor = 'blue' | 'orange' | 'green' | 'teal' | 'purple';

type Event = {
  label: string;
  color: EventColor;
  start: number;
  end: number;
};

const DAY_RANGE_START = 8;
const DAY_RANGE_END = 18;
const DAY_RANGE = DAY_RANGE_END - DAY_RANGE_START;

const DAYS: { label: string; date: number; today?: boolean; events: Event[] }[] = [
  {
    label: 'LUN',
    date: 24,
    events: [
      { label: 'Lefèvre · PAC', color: 'blue', start: 9, end: 10.5 },
      { label: 'Pose VMC', color: 'orange', start: 14, end: 16 },
    ],
  },
  {
    label: 'MAR',
    date: 25,
    events: [
      { label: 'Isolation · Bertrand', color: 'orange', start: 8.5, end: 12 },
      { label: 'Audit RGE', color: 'purple', start: 14, end: 15 },
      { label: 'Devis client', color: 'green', start: 16, end: 17 },
    ],
  },
  {
    label: 'MER',
    date: 26,
    today: true,
    events: [
      { label: 'SAV chauffage', color: 'teal', start: 9, end: 11 },
      { label: 'PAC · Marais', color: 'blue', start: 13, end: 16 },
    ],
  },
  {
    label: 'JEU',
    date: 27,
    events: [
      { label: 'Visite chantier', color: 'green', start: 10, end: 11.5 },
      { label: 'Photovoltaïque · Dupuis', color: 'blue', start: 14, end: 17 },
    ],
  },
  {
    label: 'VEN',
    date: 28,
    events: [
      { label: 'Isolation · Roche', color: 'orange', start: 9, end: 12 },
      { label: 'Signature devis', color: 'green', start: 14, end: 15.5 },
      { label: 'RDV Anah', color: 'purple', start: 16, end: 17 },
    ],
  },
];

const HOURS = Array.from({ length: DAY_RANGE + 1 }, (_, i) => DAY_RANGE_START + i);

function pct(hour: number) {
  return ((hour - DAY_RANGE_START) / DAY_RANGE) * 100;
}

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { open } = useDemoModal();

  useEffect(() => {
    const visual = visualRef.current;
    const card = cardRef.current;
    if (!visual || !card) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onEnter = () => {
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.4s';
    };
    const onMove = (e: MouseEvent) => {
      const rect = visual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotY = ((x - cx) / cx) * 6;
      const rotX = -((y - cy) / cy) * 4;
      card.style.transform = `perspective(1200px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    };
    const onLeave = () => {
      card.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s';
      card.style.transform = '';
    };

    visual.addEventListener('mouseenter', onEnter);
    visual.addEventListener('mousemove', onMove);
    visual.addEventListener('mouseleave', onLeave);
    return () => {
      visual.removeEventListener('mouseenter', onEnter);
      visual.removeEventListener('mousemove', onMove);
      visual.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow reveal">L&apos;outil tout-en-un des entreprises du bâtiment</span>
            <h1 className="reveal delay-1">
              Arrêtez de perdre vos marges.
              <br />
              Centralisez toute votre activité sur une <span className="accent">seule plateforme</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Fini l&apos;éparpillement entre Excel, les papiers et les SMS. Betool devient votre unique
              source de vérité pour automatiser vos relances de devis, piloter vos plannings et
              verrouiller votre rentabilité.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero', ctaLabel: 'Réserver ma démo' })}
              >
                Réserver ma démo
                <svg
                  className="arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="cta-note reveal delay-3">
              <span aria-hidden="true">⚡️</span> Test gratuit — Sans carte bancaire — Configuration en 5 minutes
            </p>
          </div>

          <div className="hero-visual reveal delay-2" ref={visualRef}>
            <div className="cal-card" ref={cardRef}>
              <div className="cal-toolbar">
                <div className="cal-toolbar-left">
                  <span className="dot r"></span>
                  <span className="dot y"></span>
                  <span className="dot g"></span>
                  <span className="cal-month">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    août 2026
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
                <div className="cal-toolbar-right">
                  <span className="cal-live" aria-label="Synchronisation en direct">
                    <span className="cal-live-dot" />
                    Live
                  </span>
                  <span className="cal-pill">Semaine</span>
                  <span className="cal-add" aria-hidden="true">+</span>
                </div>
              </div>

              <div className="cal-body">
                <div className="cal-time-col" aria-hidden="true">
                  {HOURS.map((h) => (
                    <span key={h}>{String(h).padStart(2, '0')}h</span>
                  ))}
                </div>

                <div className="cal-week">
                  {DAYS.map((day, dayIdx) => (
                    <div key={day.label} className={`cal-day${day.today ? ' is-today' : ''}`}>
                      <div className="cal-day-head">
                        <span className="cal-day-label">{day.label}</span>
                        <span className="cal-day-date">{day.date}</span>
                      </div>
                      <div className="cal-day-grid">
                        {HOURS.slice(0, -1).map((h) => (
                          <span key={h} className="cal-day-row" />
                        ))}
                        {day.today && (
                          <span className="cal-now" style={{ top: `${pct(11.25)}%` }} aria-hidden="true">
                            <span className="cal-now-dot" />
                          </span>
                        )}
                        {day.events.map((ev, evIdx) => {
                          const top = pct(ev.start);
                          const height = pct(ev.end) - pct(ev.start);
                          const delay = `${dayIdx * 0.06 + evIdx * 0.05}s`;
                          return (
                            <span
                              key={`${day.label}-${ev.label}`}
                              className={`cal-event ${ev.color}`}
                              style={{ top: `${top}%`, height: `${height}%`, animationDelay: delay }}
                            >
                              {ev.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="planning-phone" aria-hidden="true">
              <div className="planning-phone-screen">
                <div className="planning-phone-head">Mercredi 26 · Jean-Marc</div>
                <div className="planning-phone-row">
                  <span className="phone-dot teal" /> 09:00 · SAV chauffage
                </div>
                <div className="planning-phone-row">
                  <span className="phone-dot blue" /> 13:00 · PAC Marais
                </div>
                <div className="planning-phone-row">
                  <span className="phone-dot green" /> 17:00 · Visite chantier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
