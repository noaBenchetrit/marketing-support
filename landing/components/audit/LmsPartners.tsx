type Brand =
  | { name: string; kind: 'icon'; slug: string; color: string }
  | { name: string; kind: 'wordmark'; display: string; color: string }
  | { name: string; kind: 'image'; src: string };

const lmsPartners: Brand[] = [
  { name: 'Digiforma', kind: 'wordmark', display: 'Digiforma', color: '#FF6B35' },
  { name: 'Dendreo', kind: 'wordmark', display: 'Dendreo', color: '#7A4FB5' },
  { name: '360Learning', kind: 'wordmark', display: '360Learning', color: '#FF4F8B' },
  { name: 'Moodle', kind: 'icon', slug: 'moodle', color: '#F98012' },
  { name: 'Rise Up', kind: 'wordmark', display: 'Rise Up', color: '#0066FF' },
  { name: 'Edflex', kind: 'wordmark', display: 'Edflex', color: '#00B894' },
  { name: 'Make', kind: 'icon', slug: 'make', color: '#6D00CC' },
  { name: 'Zapier', kind: 'icon', slug: 'zapier', color: '#FF4A00' },
];

const dailyTools: Brand[] = [
  { name: 'Drive', kind: 'icon', slug: 'googledrive', color: '#1FA463' },
  { name: 'Slack', kind: 'image', src: '/slack.ico' },
  { name: 'WhatsApp', kind: 'icon', slug: 'whatsapp', color: '#25D366' },
  { name: 'Mail', kind: 'icon', slug: 'gmail', color: '#EA4335' },
  { name: 'Maps', kind: 'icon', slug: 'googlemaps', color: '#4285F4' },
];

function BrandCard({ brand, ariaHidden }: { brand: Brand; ariaHidden: boolean }) {
  if (brand.kind === 'icon') {
    return (
      <div className="lms-card lms-card--icon" aria-hidden={ariaHidden}>
        <img
          className="lms-icon"
          src={`/logos/${brand.slug}.svg`}
          alt={brand.name}
          loading="lazy"
        />
        <span className="lms-name">{brand.name}</span>
      </div>
    );
  }
  if (brand.kind === 'image') {
    return (
      <div className="lms-card lms-card--icon" aria-hidden={ariaHidden}>
        <img className="lms-icon" src={brand.src} alt={brand.name} loading="lazy" />
        <span className="lms-name">{brand.name}</span>
      </div>
    );
  }
  return (
    <div className="lms-card lms-card--wordmark" aria-hidden={ariaHidden}>
      <span className="lms-wordmark" style={{ color: brand.color }}>
        {brand.display}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  ariaLabel,
}: {
  items: Brand[];
  reverse?: boolean;
  ariaLabel: string;
}) {
  const loop = [...items, ...items, ...items];
  return (
    <div
      className={`lms-marquee${reverse ? ' lms-marquee--reverse' : ''}`}
      aria-label={ariaLabel}
    >
      <div className="lms-track">
        {loop.map((p, i) => (
          <BrandCard key={`${p.name}-${i}`} brand={p} ariaHidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export default function LmsPartners() {
  return (
    <section className="lms-partners" id="ecosystem">
      <div className="container">
        <div className="lms-head reveal">
          <span className="lms-label">L&apos;écosystème connecté</span>
          <h3 className="lms-title">beTool s&apos;invite dans votre quotidien.</h3>
          <p className="lms-sub">
            <strong>Tous les outils connectables à notre API.</strong> Connectez votre écosystème en 2 minutes —
            sans code, sans friction.
          </p>
        </div>

        <div className="lms-stack reveal delay-1">
          <div className="lms-row-label">
            <span className="lms-row-tag">↑ Côté outils métier</span>
          </div>
          <MarqueeRow items={lmsPartners} ariaLabel="Partenaires LMS" />

          <div className="lms-bridge" aria-hidden="true">
            <span className="lms-bridge-flow lms-bridge-flow--in" />
            <span className="lms-bridge-pill">beTool</span>
            <span className="lms-bridge-flow lms-bridge-flow--out" />
          </div>

          <MarqueeRow items={dailyTools} reverse ariaLabel="Outils du quotidien" />
          <div className="lms-row-label">
            <span className="lms-row-tag">↓ Côté quotidien</span>
          </div>
        </div>
      </div>
    </section>
  );
}
