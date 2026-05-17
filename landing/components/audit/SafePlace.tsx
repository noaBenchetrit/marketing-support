'use client';

import { useDemoModal } from './DemoModalProvider';

export default function SafePlace() {
  const { open } = useDemoModal();

  return (
    <section className="safe-place safe-place--compact" id="safe">
      <div className="container">
        <div className="safe-compact reveal">
          <div className="safe-compact-shield" aria-hidden="true">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#15375E"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" strokeWidth="2" />
            </svg>
          </div>

          <div className="safe-compact-text">
            <span className="eyebrow">La souveraineté</span>
            <h2>Une preuve, pour toujours.</h2>
            <div className="safe-compact-tags">
              <span className="safe-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Hébergement OVHcloud · RGPD
              </span>
              <span className="safe-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Journal d&apos;audit immuable
              </span>
              <span className="safe-tag safe-tag--live">
                <span className="safe-tag-pulse" aria-hidden="true"></span>
                DPO dédié · réponse sous 2h
              </span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary safe-cta"
            onClick={() =>
              open({ source: 'safe-place', ctaLabel: 'Être recontacté par un expert audit' })
            }
          >
            Être recontacté
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
