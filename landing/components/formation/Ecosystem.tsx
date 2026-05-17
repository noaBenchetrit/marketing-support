import SafetyNet from './SafetyNet';

type Spoke = {
  label: string;
  src?: string;
  initials?: string;
  /** Position en % du container carré (0–100). */
  x: number;
  y: number;
};

const SPOKES: Spoke[] = [
  { label: 'EDOF', src: '/monCompteFormation.png', x: 50, y: 6 },
  { label: 'Moodle', src: '/logos/moodle.svg', x: 88, y: 28 },
  { label: 'Dendreo', initials: 'De', x: 88, y: 72 },
  { label: 'Digiforma', initials: 'Df', x: 50, y: 94 },
  { label: 'Zapier', src: '/logos/zapier.svg', x: 12, y: 72 },
  { label: 'Make', src: '/logos/make.svg', x: 12, y: 28 },
];

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 9v5M12 18h.01" />
  </svg>
);

export default function Ecosystem() {
  return (
    <>
      <section className="eco-section" id="migration">
        <div className="container">
          <div className="eco-header reveal">
            <h2>
              beTool s&apos;intègre à votre quotidien.{' '}
              <span style={{ color: 'var(--brand)' }}>Pas l&apos;inverse.</span>
            </h2>
          </div>

          <div className="eco-card reveal delay-1">
            <div className="eco-card-left">
              <div className="eco-constellation">
                <svg
                  className="eco-lines"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {SPOKES.map((s, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={s.x}
                      y2={s.y}
                      className="eco-line"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </svg>

                <div className="eco-center">
                  <img src="/beTool.png" alt="beTool" />
                  <span>beTool</span>
                </div>

                {SPOKES.map((s, i) => (
                  <div
                    key={s.label}
                    className="eco-spoke"
                    style={{
                      left: `${s.x}%`,
                      top: `${s.y}%`,
                      animationDelay: `${i * 0.18}s`,
                    }}
                  >
                    <span className="eco-spoke-icon">
                      {s.src ? <img src={s.src} alt="" /> : s.initials}
                    </span>
                    <span className="eco-spoke-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="eco-card-right">
              <div className="eco-alert">
                <div className="eco-alert-title">
                  <span className="eco-alert-icon"><AlertIcon /></span>
                  Vous quittez Digiforma ou Dendreo&nbsp;?
                </div>
                <p>
                  Notre équipe prend en charge la migration intégrale et gratuite de vos données
                  existantes. Vous êtes <strong>100&nbsp;% opérationnel en 5 jours chrono</strong>,
                  sans perdre un seul historique.
                </p>
                <ul className="eco-alert-bullets">
                  <li>Reprise complète de votre catalogue de formations</li>
                  <li>Historique des stagiaires &amp; émargements préservé</li>
                  <li>Accompagnement dédié par un consultant beTool</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SafetyNet
        buttonLabel="Planifier ma migration gratuite + Essai 14j"
        variant="brand"
      />
    </>
  );
}
